import React, { Fragment } from 'react'
import { Layout, Icon } from 'antd'
import GlobalFooter from '@/components/GlobalFooter'
import { getFormatDate } from '@/utils/utils'

const { Footer } = Layout
const curYear = getFormatDate(new Date(), 'yyyy')
const copyright = (
  <Fragment>
    Copyright <Icon type="copyright" /> 1997-{curYear}xxxx（集团）有限公司版权所有
  </Fragment>
)

const FooterView = () => (
  <Footer style={{ padding: 0 }}>
    <GlobalFooter
      links={[
        {
          key: 'Pro 首页',
          title: 'Pro 首页',
          href: 'https://pro.ant.design',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <Icon type="github" />,
          href: 'https://github.com/ant-design/ant-design-pro',
          blankTarget: true,
        },
        {
          key: 'Ant Design',
          title: 'Ant Design',
          href: 'https://ant.design',
          blankTarget: true,
        },
      ]}
      copyright={copyright}
    />
  </Footer>
);
export default FooterView;
