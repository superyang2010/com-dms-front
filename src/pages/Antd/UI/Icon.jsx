import React from 'react';
import { Card, Row, Col, Icon } from 'antd';
import style from './Icon.less';

const MyIcon = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js', // 在 iconfont.cn 上生成
});

class IconDemo extends React.Component {
  static defaultProps = {
    icons: [],
    svgIcons: []
  }

  icons = [
    'step-backward', 'step-forward', 'fast-backward', 'fast-forward', 'shrink', 'arrows-alt', 'down', 'up', 'left', 'right', 'caret-up', 'caret-down', 'caret-left', 'caret-right', 'up-circle', 'down-circle', 'left-circle', 'right-circle', 'up-circle-o', 'down-circle-o', 'right-circle-o', 'left-circle-o', 'double-right', 'double-left', 'verticle-left', 'verticle-right', 'forward', 'backward', 'rollback', 'enter', 'retweet', 'swap', 'swap-left', 'swap-right', 'arrow-up', 'arrow-down', 'arrow-left', 'arrow-right', 'play-circle', 'play-circle-o', 'up-square', 'down-square', 'left-square', 'right-square', 'up-square-o', 'down-square-o', 'left-square-o', 'right-square-o', 'login', 'logout', 'menu-fold', 'menu-unfold',
    'question', 'question-circle-o', 'question-circle', 'plus', 'plus-circle-o', 'plus-circle', 'pause', 'pause-circle-o', 'pause-circle', 'minus', 'minus-circle-o', 'minus-circle', 'plus-square', 'plus-square-o', 'minus-square', 'minus-square-o', 'info', 'info-circle-o', 'info-circle', 'exclamation', 'exclamation-circle-o', 'exclamation-circle', 'close', 'close-circle', 'close-circle-o', 'close-square', 'close-square-o', 'check', 'check-circle', 'check-circle-o', 'check-square', 'check-square-o', 'clock-circle-o', 'clock-circle',
    'android', 'android-o', 'apple', 'apple-o', 'windows', 'windows-o', 'ie', 'chrome', 'github', 'aliwangwang', 'aliwangwang-o', 'dingding', 'dingding-o',
    'lock', 'unlock', 'area-chart', 'pie-chart', 'bar-chart', 'dot-chart', 'bars', 'book', 'calendar', 'cloud', 'cloud-download', 'code', 'code-o', 'copy', 'credit-card', 'delete', 'desktop', 'download', 'edit', 'ellipsis', 'file', 'file-text', 'file-unknown', 'file-pdf', 'file-excel', 'file-jpg', 'file-ppt', 'file-add', 'folder', 'folder-open', 'folder-add', 'hdd', 'frown', 'frown-o', 'meh', 'meh-o', 'smile', 'smile-o', 'inbox', 'laptop', 'appstore-o', 'appstore', 'line-chart', 'link', 'mail', 'mobile', 'notification', 'paper-clip', 'picture', 'poweroff', 'reload', 'search', 'setting', 'share-alt', 'shopping-cart', 'tablet', 'tag', 'tag-o', 'tags', 'tags-o', 'to-top', 'upload', 'user', 'video-camera', 'home', 'loading', 'loading-3-quarters', 'cloud-upload-o', 'cloud-download-o', 'cloud-upload', 'cloud-o', 'star-o', 'star', 'heart-o', 'heart', 'environment', 'environment-o', 'eye', 'eye-o', 'camera', 'camera-o', 'save', 'team', 'solution', 'phone', 'filter', 'exception', 'export', 'customer-service', 'qrcode', 'scan', 'like', 'like-o', 'dislike', 'dislike-o', 'message', 'pay-circle', 'pay-circle-o', 'calculator', 'pushpin', 'pushpin-o', 'bulb', 'select', 'switcher', 'rocket', 'bell', 'disconnect', 'database', 'compass', 'barcode', 'hourglass', 'key', 'flag', 'layout', 'printer', 'sound', 'usb', 'skin', 'tool', 'sync', 'wifi', 'car', 'schedule', 'user-add', 'user-delete', 'usergroup-add', 'usergroup-delete', 'man', 'woman', 'shop', 'gift', 'idcard', 'medicine-box', 'red-envelope', 'coffee', 'copyright', 'trademark', 'safety', 'wallet', 'bank', 'trophy', 'contacts', 'global', 'shake', 'api', 'fork'
  ];

  svgIcons = [
    'tuichu','fanhui','facebook','twitter','xiangyou','right','fanhui1','fenxiang','xiangxia','xiangxia1','xiangxia2','suofang','chexiao','esc','chexiao1','iconfont','suoding',
    'bianji','shoucang2','xinjian','shoucang1','gongkai','gouwuche1','zhongwen','shangchuan','yingwen','gouwuche2','shanchu','xiazai','sousuo','dashang','xiangmu','fuzhidaima1',
    'wofaqi','xiangmuchengyuan','gengduo','wocanyu','lishi','piliang','shijian','gonggao','weixin','weibo','gerenzhanghu','tianjiachengyuan','soutubiao','souren','yuzhanghao',
    'biaoqing','qq','weibo1','zuoxuan','fangda2','zuo2','suoxiao','you2','suoxiao2','youxuan2','zuo','zuoxuan2','shang','shang2','youxuan','xia2','fangda','xia','you','zhuanrang',
    'dianzan','huifu','saoyisao','shuoming','jinggao','jieshi','youxiang','guanbi','qunzhu','fuzhichenggong','weijiaru','daishenhe','shenhetongguo','shenhejujue','xinjiantubiaoku',
    'tubiaoku','gouwuche','huidingbu','dianzan1','morentouxiang','paixu','wenjian','github','yuzhanghao1','weibo2','you1','zuo1','shang1','iconfont1','gonggaodayi','gongnengjieshao',
    'tubiaohuizhi','daimayingyong','zhifubao','alibaba','xiaomi','zhongguodianxin','tianmao','alimama','zhubajie','tengxunwang','aliyun','taobaowang','anzhuo','ios','pcduan','qingchu',
    'huizhiguize','zhizuoliucheng','fuzhidaima','fankui1','weitijiao','chexiao2'
  ]
  

  render() {

    return (
      <div>
        <Row>
          <Col span={24}>
            <Card hoverable title="Antd Icons">
              <ul className={style['icon-list']}>
                {
                  this.icons.map((type, k) =>
                    <li key={k}><Icon type={type} />
                      <span className={style["ico-name"]}>{type}</span>
                    </li>)
                }
              </ul>
            </Card>
          </Col>
        </Row>
        <Row style={{ marginTop: 20 }}>
          <Col span={24}>
            <Card hoverable title="其他 Icons">
              <ul className={style["icon-list"]}>
                {
                  this.svgIcons.map((type, k) =>
                    <li key={k}>
                      <MyIcon type={`icon-${type}`} />
                      <div className={style["ico-name"]}>{type}</div>
                    </li>)
                }
              </ul>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}


export default IconDemo;
