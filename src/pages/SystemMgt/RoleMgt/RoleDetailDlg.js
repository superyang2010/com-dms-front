import React, { PureComponent } from 'react';
import { connect } from 'dva';
import {
  Form,
  Input,
  Modal,
  message
} from 'antd';

const FormItem = Form.Item;
const { TextArea } = Input;

@connect(({ roleMgt, loading }) => ({
  roleMgt,
  loading: loading.models.roleMgt,
}))
@Form.create()
class RoleDetailDlg extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
        
    };
    this.okHandle = this.okHandle.bind(this);
    this.cancelHandle = this.cancelHandle.bind(this);
  }

  componentWillReceiveProps = (props) => {
    
  }

  okHandle = () => {
    const { form, dispatch, handleModalVisible, isEdit, formValues} = this.props;
    form.validateFields((err, fieldsValue) => {
      if (err) return;
      // eslint-disable-next-line no-param-reassign
      fieldsValue.roleIds = fieldsValue.roles ? fieldsValue.roles.map(role => role.key) : [];
      let dispatchType = 'roleMgt/add';
      if (isEdit) {
        fieldsValue.id = formValues.id;
        dispatchType = 'roleMgt/modify';
      }
      dispatch({
        type: dispatchType,
        payload: fieldsValue,
        callback: () => {
          form.resetFields();
          if (isEdit) {
            message.success('角色信息修改成功');
          } else {
            message.success('角色信息新增成功');
          }
          handleModalVisible();
        }
      });
      
    });
  };

  cancelHandle = () => {
    const {handleModalVisible} = this.props;
    handleModalVisible();
  }

  render() {
    const { form, modalVisible} = this.props;
    let {formValues, isEdit} = this.props;

    // 当前角色信息
    formValues = formValues || {};
    // 是否编辑态
    isEdit = !!isEdit;

    return (
      <Modal
        destroyOnClose
        title="新增角色"
        visible={modalVisible}
        onOk={this.okHandle}
        onCancel={this.cancelHandle}
      >
        <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="编码">
          {form.getFieldDecorator('code', {
            rules: [{ required: !isEdit, message: '请输入至少五个字符的编码！', min: 5 }],
            initialValue: formValues.code
            })(<Input placeholder="请输入角色编码" disabled={isEdit} />)}
        </FormItem>
        <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="角色名">
          {form.getFieldDecorator('name', {
            rules: [{ required: !isEdit, message: '请输入至少五个字符的名称！', min: 5 }],
            initialValue: formValues.name
            })(<Input placeholder="请输入角色名称" />)}
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

export default RoleDetailDlg;