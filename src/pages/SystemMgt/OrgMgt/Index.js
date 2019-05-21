import React, { PureComponent, Fragment } from 'react';
import { connect } from 'dva';
import { Form, 
          Layout, 
          Menu, 
          Icon,
          Input,
          Select,
          Tree,
          Radio,
          Button,
          message, 
          Divider} from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import {deepClone} from "@/utils/utils"

import styles from './Index.less';

const {Content, Sider} = Layout;
const FormItem = Form.Item;
const { Option } = Select;
const { TreeNode } = Tree;
const {Search, TextArea} = Input;
const RadioGroup = Radio.Group;

/* eslint react/no-multi-comp:0 */
@connect(({ orgMgt, loading }) => ({
  orgMgt,
  loading: loading.models.orgMgt,
}))
@Form.create()
class MenuList extends PureComponent {
  state = {
    expandedKeys: [],
    searchValue: '',
    autoExpandParent: true,
    isAdd: false,
    isEdit: false,
    currentMenuData: {},
    rightClickNodeTreeItem: {
      display: "none",
      pageX: "",
      pageY: ""
    },
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'orgMgt/queryMenuTree'
    });
    dispatch({
      type: 'orgMgt/fetchRoles'
    });
    this.onExpand = this.onExpand.bind(this);
    this.getParentKey = this.getParentKey.bind(this);
    this.generateList = this.generateList.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onRightClick = this.onRightClick.bind(this);
    this.hideContextMenu = this.hideContextMenu.bind(this);
    this.rightMenuItemClick = this.rightMenuItemClick.bind(this);
    this.onTreeClick = this.onTreeClick.bind(this);
  }

  onExpand = (expandedKeys) => {
    this.setState({
      expandedKeys,
      autoExpandParent: false,
    });
  }

  onTreeClick = (selectedId, {node}) => {
    const {currentMenuData: {id}} = this.state;
    if (selectedId && selectedId.length > 0 && selectedId.indexOf(`${id}`) === -1) {
      this.setState({
        isAdd: false,
        isEdit: false,
        currentMenuData: node.props.nodeData
      });
      const { form } = this.props;
      form.resetFields();
      form.setFieldsValue(node.props.nodeData);
    }
  }

  getParentKey = (key, tree) => {
    let parentKey;
    for (let i = 0; i < tree.length; i++) {
      const node = tree[i];
      if (node.children) {
        if (node.children.some(item => item.key === key)) {
          parentKey = node.key;
        } else if (this.getParentKey(key, node.children)) {
          parentKey = this.getParentKey(key, node.children);
        }
      }
    }
    return parentKey;
  };

  generateList = (data) => {
    for (let i = 0; i < data.length; i++) {
      const node = data[i];
      const {key, title} = node;
      this.dataList.push({ key, title });
      if (node.children) {
        this.generateList(node.children);
      }
    }
  };


  onChange = (e) => {
    const {
      orgMgt: { menus }
    } = this.props;
    const {value} = e.target;
    const expandedKeys = this.dataList.map((item) => {
      if (item.title.indexOf(value) > -1) {
        return this.getParentKey(item.key, menus);
      }
      return null;
    }).filter((item, i, self) => item && self.indexOf(item) === i);
    this.setState({
      expandedKeys,
      searchValue: value,
      autoExpandParent: true,
    });
  }

  buildRightContextMenu = () => {
    const { rightClickNodeTreeItem: {display, pageX, pageY} } = this.state;
    const tmpStyle = {
      position: "absolute",
      left: `${pageX}px`,
      top: `${pageY}px`,
      display,
      
    };
    return <Menu onClick={this.rightMenuItemClick} className={styles.rightContextMenu} style={tmpStyle}>
      <Menu.Item key="add">新增下级节点</Menu.Item>
      <Menu.Item key="edit">修改当前节点</Menu.Item>
           </Menu>;
  }

  rightMenuItemClick = (e) => {
    const {rightClickNodeTreeItem: {nodeData}} = this.state;
    if (nodeData) {
      this.setState({
        isEdit: e.key === "edit",
        isAdd: e.key === "add",
        currentMenuData: nodeData,
        rightClickNodeTreeItem: {
          display: "none"
        }
      });
      const { form } = this.props;
      if (e.key === "add") {
        form.resetFields();
      }
    } else {
      this.setState({
        isEdit: false,
        isAdd: false
      });
    }
  }

  onRightClick = ({event, node}) => {
    this.setState({
      rightClickNodeTreeItem: {
        display: "inline",
        pageX: event.pageX,
        pageY: event.pageY,
        nodeData: node.props.nodeData,
      }
    });
  };

  hideContextMenu = () => {
    this.setState({
      rightClickNodeTreeItem: {
        display: "none",
        pageX: -100,
        pageY: -100
      }
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    const { form, dispatch} = this.props;
    const { isEdit, isAdd, currentMenuData } = this.state;
    form.validateFields((err, fieldsValue) => {
      if (err) return;
      // eslint-disable-next-line no-param-reassign
      fieldsValue.roleIds = fieldsValue.hasRoles ? fieldsValue.hasRoles.map(role => role.key) : [];
      let dispatchType = 'orgMgt/add';
      if (isEdit) {
        fieldsValue.id = currentMenuData.id;
        dispatchType = 'orgMgt/modify';
      } else if (isAdd) {
        fieldsValue.parentId = currentMenuData.id;
        dispatchType = 'orgMgt/add';
      }
      dispatch({
        type: dispatchType,
        payload: fieldsValue,
        callback: () => {
          // form.resetFields();
          if (isEdit) {
            message.success('修改菜单成功');
          } else {
            message.success('新增菜单成功');
          }
          // form.setFieldsValue(fieldsValue);
          this.setState({
            isEdit: false,
            isAdd: false
          });
        }
      });
      
    });
  };


  render() {
    this.dataList = [];
    const {
      form,
      orgMgt: { menus, roles}
    } = this.props;
    this.generateList(menus);
    const { isEdit, isAdd, searchValue, expandedKeys, autoExpandParent, currentMenuData } = this.state;
    const newExpandedKeys = expandedKeys.length !== 0 ? expandedKeys : (menus.length > 0 ? [menus[0].key] : []);
    const loop = data => data.map((item) => {
      const index = item.title.indexOf(searchValue);
      const beforeStr = item.title.substr(0, index);
      const afterStr = item.title.substr(index + searchValue.length);
      const title = index > -1 ? (
        <span>
          {beforeStr}
          <span style={{ color: '#f50' }}>{searchValue}</span>
          {afterStr}
        </span>
      ) : <span>{item.title}</span>;
      const nodeData = deepClone(item);
      delete nodeData.children;
      if (item.children) {
        return (
          <TreeNode nodeData={nodeData} icon={item.menuType === "F" ? <Icon type="thunderbolt" /> : <Icon type="file" />} key={item.key} title={title}>
            {loop(item.children)}
          </TreeNode>
        );
      }
      return <TreeNode nodeData={nodeData} icon={<Icon type="search" />} key={item.key} title={title} />;
    });

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 12 },
        lg: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 },
        lg: { span: 15 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };

    // 当前用户已有的角色
    const initRole = [];
    if (!isAdd && currentMenuData.roles) {
      currentMenuData.roles.forEach(role => {
        initRole.push({key: `${role.id}`, label: role.name});
      });
    }
    // 角色可选项
    const children = [];
    for (let i = 0; i < roles.length; i++) {
      children.push(<Option key={roles[i].id}>{roles[i].name}</Option>);
    }

    return (
      <PageHeaderWrapper title="菜单列表">
        <Layout className={styles["menu-tree"]} onClick={this.hideContextMenu}>
          <Sider width={300}>
            <Search style={{ marginBottom: 8 }} placeholder="输入关键字搜索" onChange={this.onChange} />
            图例说明： <Icon type="file" /> 页面菜单  &nbsp;&nbsp; <Icon type="thunderbolt" /> 页面功能点
            <Tree
              showIcon
              onExpand={this.onExpand}
              expandedKeys={newExpandedKeys}
              autoExpandParent={autoExpandParent}
              style={{ userSelect: 'none' }}
              onRightClick={this.onRightClick} 
              onSelect={this.onTreeClick}
            >
              {loop(menus)}
            </Tree>
          </Sider>
          <Divider style={{height: '100vh'}} type="vertical" />
          <Content className={styles.formContent}>
            <Form {...formItemLayout} onSubmit={this.handleSubmit}>
              <FormItem label="菜单类型">
                {form.getFieldDecorator('menuType', {
                  initialValue: currentMenuData.menuType === "F" ? "F" : "M"
                  })(<Select disabled={!isAdd||!isEdit && currentMenuData.menuType === "F"}>
                    <Option value="M"><Icon type="file" /> 页面菜单</Option>
                    <Option value="F"><Icon type="thunderbolt" /> 页面功能点</Option>
                  </Select>)}
              </FormItem>
              <FormItem label="菜单编码">
                {form.getFieldDecorator('code', {
                  rules: [{ required: isAdd, message: '请输入编码！' }],
                  initialValue: isAdd ? null : currentMenuData.code
                  })(<Input disabled={!isAdd || isEdit} />)}
              </FormItem>
              <FormItem label="菜单名称">
                {form.getFieldDecorator('name', {
                  rules: [{ required: isAdd, message: '请输入名称！' }],
                  initialValue: isAdd ? null : currentMenuData.name
                  })(<Input disabled={!(isAdd || isEdit)} />)}
              </FormItem>
              <FormItem label="菜单链接">
                {form.getFieldDecorator('url', {
                  initialValue: isAdd ? null : currentMenuData.url
                  })(<Input disabled={!(isAdd || isEdit)} />)}
              </FormItem>
              <FormItem label="功能可见角色">
                {form.getFieldDecorator('hasRoles', {
                  initialValue: initRole
                })(<Select
                  disabled={!(isAdd || isEdit)}
                  mode="multiple"
                  placeholder="请选择角色"
                  labelInValue
                  onChange={this.handleRoleSelectChange}
                  filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                >
                  {children}
                </Select>)}
              </FormItem>
              <FormItem label="菜单图标">
                {form.getFieldDecorator('icon', {
                  initialValue: isAdd ? null : currentMenuData.icon
                  })(<RadioGroup disabled={!(isAdd || isEdit)}>
                    <Radio value="appstore"><Icon type="appstore" /></Radio>
                    <Radio value="user"><Icon type="user" /></Radio>
                    <Radio value="team"><Icon type="team" /></Radio>
                    <Radio value="bars"><Icon type="bars" /></Radio>
                    <Radio value="cluster"><Icon type="cluster" /></Radio>
                    <Radio value="setting"><Icon type="setting" /></Radio>
                    <Radio value="plus"><Icon type="plus" /></Radio>
                    <Radio value="edit"><Icon type="edit" /></Radio>
                    <Radio value="delete"><Icon type="delete" /></Radio>
                     </RadioGroup>)}
              </FormItem>
              <FormItem label="状态">
                {form.getFieldDecorator('status', {
                  initialValue: isAdd ? "Y" : currentMenuData.status
                  })(<RadioGroup disabled={!(isAdd || isEdit)}>
                    <Radio value="Y">有效</Radio>
                    <Radio value="N">无效</Radio>
                     </RadioGroup>)}
              </FormItem>
              <FormItem label="描述">
                {form.getFieldDecorator('notes', {
                  rules: [{message: '最多1024个字符！', max: 1024 }],
                  initialValue: currentMenuData.notes
                  })(<TextArea disabled={!(isAdd || isEdit)} rows={4} />)}
              </FormItem>
              
              {isEdit||isAdd ? <FormItem {...tailFormItemLayout}>
                <Button
                  type="primary"
                  htmlType="submit"
                >
                  保存
                </Button>
              </FormItem> : null}
            </Form>
          </Content>
        </Layout>
        {this.buildRightContextMenu()}
      </PageHeaderWrapper>
    );
  }
}

export default MenuList;
