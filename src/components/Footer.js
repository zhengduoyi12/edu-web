// Footer
import React, { Component } from "react";

const localStyle = {
  text: {
    fontSize: "18px",
    textAlign: "left",
    color: "#fff",
    paddingTop: "30px",
  },
};

class Footer extends Component {
  render() {
    return (
      <div className="footer_wrap">
        <div className="body">
          <div style={localStyle.text}>
            XXX平台是XXX旗下专注职业技能提升的在线学习平台。
            <br /> 关于我们
            <br /> 联系我们
            <br /> 帮助中心 <br /> 中国大学XXXXX ©1997-202
          </div>
        </div>
      </div>
    );
  }
}
export default Footer;
