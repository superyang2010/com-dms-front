import React, { PureComponent } from 'react';
import { connect } from 'dva';
import {
  Form,
  Input,
  Select,
  Modal,
  message
} from 'antd';

const FormItem = Form.Item;
const {Option} = Select;
const { TextArea } = Input;

@connect(({ userMgt, loading }) => ({
  userMgt,
  loading: loading.models.userMgt,
}))
@Form.create()
class UserDetailDlg extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
        visible: false,
        confirmDirty: false
    };
    this.okHandle = this.okHandle.bind(this);
    this.cancelHandle = this.cancelHandle.bind(this);
    this.fetchRoles = this.fetchRoles.bind(this);
  }

  componentWillReceiveProps = (props) => {
    
  }

  componentDidMount = () => {
    this.fetchRoles(null);
  }

  fetchRoles = (name) => {
    const { dispatch } = this.props;
    dispatch({
      type: 'userMgt/fetchRoles',
      payload: { name }
    });
  }

  okHandle = () => {
    const { form, dispatch, handleModalVisible, isEdit, formValues} = this.props;
    form.validateFields((err, fieldsValue) => {
      if (err) return;
      // eslint-disable-next-line no-param-reassign
      fieldsValue.roleIds = fieldsValue.roles ? fieldsValue.roles.map(role => role.key) : [];
      fieldsValue.id = formValues.id;
      const type = isEdit ? 'userMgt/modify' : 'userMgt/add';
      dispatch({
        type,
        payload: fieldsValue,
        callback: () => {
          form.resetFields();
          message.success('添加成功');
          handleModalVisible();
        }
      });
      
    });
  };

  cancelHandle = () => {
    const {handleModalVisible} = this.props;
    handleModalVisible();
  }

  checkConfirm = (rule, value, callback) => {
    const { form } = this.props;
    if (!value || value.length < 6) {
      callback('密码长度至少6位');
    } else if (value && value !== form.getFieldValue('userpwd')) {
      callback("两次密码输入不一致");
    } else {
      callback();
    }
  };

  checkPassword = (rule, value, callback) => {
    const { visible, confirmDirty } = this.state;
    if (!visible) {
      this.setState({
        visible: !!value,
      });
    }
    if (!value || value.length < 6) {
      callback('密码长度至少6位');
    } else {
      const { form } = this.props;
      if (value && confirmDirty) {
        form.validateFields(['userpwd1'], { force: true });
      }
      callback();
    }
  };

  render() {
    const { form, modalVisible, userMgt: {roles}} = this.props;
    let {formValues, isEdit} = this.props;
    const rolesData = roles || [];

    // 当前用户信息
    formValues = formValues || {};
    // 当前用户已有的角色
    const initRole = [];
    if (formValues.roles) {
      formValues.roles.forEach(role => {
        initRole.push({key: role.id, label: role.name});
      });
    }
    // 是否编辑态
    isEdit = !!isEdit;

    const children = [];
    for (let i = 0; i < rolesData.length; i++) {
      children.push(<Option key={rolesData[i].id}>{rolesData[i].name}</Option>);
    }

    return (
      <Modal
        destroyOnClose
        title="新增用户"
        visible={modalVisible}
        onOk={this.okHandle}
        onCancel={this.cancelHandle}
      >
        <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="编码">
          {form.getFieldDecorator('code', {
            rules: [{ required: !isEdit, message: '请输入至少五个字符的编码！', min: 5 }],
            initialValue: formValues.code
            })(<Input placeholder="请输入用户编码" disabled={isEdit} />)}
        </FormItem>
        <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="用户名">
          {form.getFieldDecorator('username', {
            rules: [{ required: !isEdit, message: '请输入至少五个字符的名称！', min: 5 }],
            initialValue: formValues.username
            })(<Input placeholder="请输入用户名称" disabled={isEdit} />)}
        </FormItem>
        {isEdit ? null : <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="密码">
          {form.getFieldDecorator('userpwd', {
            rules: [{validator: this.checkPassword}],
            })(<Input type="password" />)}
                         </FormItem>}
        {isEdit ? null : <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="确认密码">
          {form.getFieldDecorator('userpwd1', {
                            rules: [{validator: this.checkConfirm}],
                            })(<Input type="password" />)}
        </FormItem>}
        <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="角色">
          {form.getFieldDecorator('roles', {
            initialValue: initRole
            })(<Select
              mode="multiple"
              style={{ width: '100%' }}
              placeholder="请选择角色"
              labelInValue
              filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
            >
              {children}
               </Select>)}
        </FormItem>
        <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="描述">
          {form.getFieldDecorator('notes', {
            rules: [{message: '最多1024个字符！', max: 1024 }],
            initialValue: formValues.notes
            })(<TextArea rows={4} />)}
        </FormItem>
      </Modal>
    );
  }

}

export default UserDetailDlg;