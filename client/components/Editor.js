import React, { useRef, useEffect } from "react";
import { connect } from "react-redux"
// import { exportToHtml } from "../store"
import { render } from "react-dom";
import axios from "axios";

import EmailEditor from "react-email-editor";
export const Editor = (props) => {
    const { pathname } = props.workouts.location;
    const { workouts } = props.workouts

  const emailEditorRef = useRef(null);
//   const { username, workouts, match, params } = props;

  useEffect(()=>{
    console.log('--------', props.workouts)
  },[])
    const exportHtml = () => {
        emailEditorRef.current.editor.exportHtml((data) => {
          const { design, html } = data;
        //   console.log('exportHtml', html);
        //   console.log('>>>>>>>',match)
          const id = pathname.split('/workout/')[1]
          const title = workouts.filter(item => item.id === id*1)
          console.log('JJJJJJJ->', name)
            handleExport({html: html, id: id, title: title[0].title})
        });
      };

    const handleExport = async(html)=>{
        try{
            console.log('XXXXXX->',html.title)

            const resp = await axios.put(`/api/workouts/${html.id}`, html,{
                headers: {
                  authorization: window.localStorage.getItem('token')
                }
              });
            console.log(resp.data);
            alert('Output HTML has been logged in your developer console.');

        }catch(ex){
            console.log(ex.response)
        }
    }
  const onLoad = () => {
    // editor instance is created
    // you can load your template here;
    const templateJson = {
        "counters": {
            "u_row": 6,
            "u_column": 6,
            "u_content_text": 8,
            "u_content_image": 2,
            "u_content_button": 1,
            "u_content_social": 1
        },
        "body": {
            "id": "bkOAp7mSgk",
            "rows": [{
                "id": "Kp9oMfJX1H",
                "cells": [1],
                "columns": [{
                    "id": "HtqgBxhWRa",
                    "contents": [{
                        "id": "UDP1v83OPo",
                        "type": "text",
                        "values": {
                            "containerPadding": "10px",
                            "anchor": "",
                            "color": "#afb0c7",
                            "textAlign": "center",
                            "lineHeight": "170%",
                            "linkStyle": {
                                "inherit": true,
                                "linkColor": "#0000ee",
                                "linkHoverColor": "#0000ee",
                                "linkUnderline": true,
                                "linkHoverUnderline": true
                            },
                            "hideDesktop": false,
                            "displayCondition": null,
                            "_meta": {
                                "htmlID": "u_content_text_1",
                                "htmlClassNames": "u_content_text"
                            },
                            "selectable": true,
                            "draggable": true,
                            "duplicatable": true,
                            "deletable": true,
                            "hideable": true,
                            "text": "<p style=\"font-size: 14px; line-height: 170%;\"><span style=\"font-size: 14px; line-height: 23.8px;\">View Email in Browser</span></p>",
                            "hideMobile": false
                        }
                    }],
                    "values": {
                        "_meta": {
                            "htmlID": "u_column_1",
                            "htmlClassNames": "u_column"
                        },
                        "border": {},
                        "padding": "0px",
                        "backgroundColor": ""
                    }
                }],
                "values": {
                    "displayCondition": null,
                    "columns": false,
                    "backgroundColor": "",
                    "columnsBackgroundColor": "",
                    "backgroundImage": {
                        "url": "",
                        "fullWidth": true,
                        "repeat": false,
                        "center": true,
                        "cover": false
                    },
                    "padding": "0px",
                    "anchor": "",
                    "hideDesktop": false,
                    "_meta": {
                        "htmlID": "u_row_1",
                        "htmlClassNames": "u_row"
                    },
                    "selectable": true,
                    "draggable": true,
                    "duplicatable": true,
                    "deletable": true,
                    "hideable": true,
                    "hideMobile": false,
                    "noStackMobile": false
                }
            }, {
                "id": "Ql2rS5ayBR",
                "cells": [1],
                "columns": [{
                    "id": "iIJZItbOzI",
                    "contents": [{
                        "id": "8XjUjyfbZ4",
                        "type": "image",
                        "values": {
                            "containerPadding": "20px",
                            "anchor": "",
                            "src": {
                                "url": "https://cdn.templates.unlayer.com/assets/1597218426091-xx.png",
                                "width": 537,
                                "height": 137,
                                "maxWidth": "32%",
                                "autoWidth": false
                            },
                            "textAlign": "center",
                            "altText": "Image",
                            "action": {
                                "name": "web",
                                "values": {
                                    "href": "",
                                    "target": "_blank"
                                }
                            },
                            "hideDesktop": false,
                            "displayCondition": null,
                            "_meta": {
                                "htmlID": "u_content_image_1",
                                "htmlClassNames": "u_content_image"
                            },
                            "selectable": true,
                            "draggable": true,
                            "duplicatable": true,
                            "deletable": true,
                            "hideable": true,
                            "hideMobile": false
                        }
                    }],
                    "values": {
                        "_meta": {
                            "htmlID": "u_column_2",
                            "htmlClassNames": "u_column"
                        },
                        "border": {},
                        "padding": "0px",
                        "backgroundColor": ""
                    }
                }],
                "values": {
                    "displayCondition": null,
                    "columns": false,
                    "backgroundColor": "",
                    "columnsBackgroundColor": "#ffffff",
                    "backgroundImage": {
                        "url": "",
                        "fullWidth": true,
                        "repeat": false,
                        "center": true,
                        "cover": false
                    },
                    "padding": "0px",
                    "anchor": "",
                    "hideDesktop": false,
                    "_meta": {
                        "htmlID": "u_row_2",
                        "htmlClassNames": "u_row"
                    },
                    "selectable": true,
                    "draggable": true,
                    "duplicatable": true,
                    "deletable": true,
                    "hideable": true,
                    "hideMobile": false,
                    "noStackMobile": false
                }
            }, {
                "id": "VItrJSaH9s",
                "cells": [1],
                "columns": [{
                    "id": "35uidHSqtX",
                    "contents": [{
                        "id": "oofoiChwkl",
                        "type": "image",
                        "values": {
                            "containerPadding": "40px 10px 10px",
                            "anchor": "",
                            "src": {
                                "url": "https://cdn.templates.unlayer.com/assets/1597218650916-xxxxc.png",
                                "width": 335,
                                "height": 93,
                                "maxWidth": "26%",
                                "autoWidth": false
                            },
                            "textAlign": "center",
                            "altText": "Image",
                            "action": {
                                "name": "web",
                                "values": {
                                    "href": "",
                                    "target": "_blank"
                                }
                            },
                            "hideDesktop": false,
                            "displayCondition": null,
                            "_meta": {
                                "htmlID": "u_content_image_2",
                                "htmlClassNames": "u_content_image"
                            },
                            "selectable": true,
                            "draggable": true,
                            "duplicatable": true,
                            "deletable": true,
                            "hideable": true,
                            "hideMobile": false
                        }
                    }, {
                        "id": "Z5KvGIUm0-",
                        "type": "text",
                        "values": {
                            "containerPadding": "10px",
                            "anchor": "",
                            "color": "#e5eaf5",
                            "textAlign": "center",
                            "lineHeight": "140%",
                            "linkStyle": {
                                "inherit": true,
                                "linkColor": "#0000ee",
                                "linkHoverColor": "#0000ee",
                                "linkUnderline": true,
                                "linkHoverUnderline": true
                            },
                            "hideDesktop": false,
                            "displayCondition": null,
                            "_meta": {
                                "htmlID": "u_content_text_3",
                                "htmlClassNames": "u_content_text"
                            },
                            "selectable": true,
                            "draggable": true,
                            "duplicatable": true,
                            "deletable": true,
                            "hideable": true,
                            "text": "<p style=\"font-size: 14px; line-height: 140%;\"><strong>T H A N K S&nbsp; &nbsp;F O R&nbsp; &nbsp;S I G N I N G&nbsp; &nbsp;U P !</strong></p>",
                            "hideMobile": false
                        }
                    }, {
                        "id": "_Rlyvl-qmI",
                        "type": "text",
                        "values": {
                            "containerPadding": "0px 10px 31px",
                            "anchor": "",
                            "color": "#e5eaf5",
                            "textAlign": "center",
                            "lineHeight": "140%",
                            "linkStyle": {
                                "inherit": true,
                                "linkColor": "#0000ee",
                                "linkHoverColor": "#0000ee",
                                "linkUnderline": true,
                                "linkHoverUnderline": true
                            },
                            "hideDesktop": false,
                            "displayCondition": null,
                            "_meta": {
                                "htmlID": "u_content_text_4",
                                "htmlClassNames": "u_content_text"
                            },
                            "selectable": true,
                            "draggable": true,
                            "duplicatable": true,
                            "deletable": true,
                            "hideable": true,
                            "text": "<p style=\"font-size: 14px; line-height: 140%;\"><span style=\"font-size: 28px; line-height: 39.2px;\"><strong><span style=\"line-height: 39.2px; font-size: 28px;\">Verify Your E-mail Address&nbsp;</span></strong></span></p>",
                            "hideMobile": false
                        }
                    }],
                    "values": {
                        "_meta": {
                            "htmlID": "u_column_3",
                            "htmlClassNames": "u_column"
                        },
                        "border": {},
                        "padding": "0px",
                        "backgroundColor": ""
                    }
                }],
                "values": {
                    "displayCondition": null,
                    "columns": false,
                    "backgroundColor": "",
                    "columnsBackgroundColor": "#003399",
                    "backgroundImage": {
                        "url": "",
                        "fullWidth": true,
                        "repeat": false,
                        "center": true,
                        "cover": false
                    },
                    "padding": "0px",
                    "anchor": "",
                    "hideDesktop": false,
                    "_meta": {
                        "htmlID": "u_row_3",
                        "htmlClassNames": "u_row"
                    },
                    "selectable": true,
                    "draggable": true,
                    "duplicatable": true,
                    "deletable": true,
                    "hideable": true,
                    "hideMobile": false,
                    "noStackMobile": false
                }
            }, {
                "id": "pmaFOck17R",
                "cells": [1],
                "columns": [{
                    "id": "up9tYxKMrC",
                    "contents": [{
                        "id": "7882DdquF0",
                        "type": "text",
                        "values": {
                            "containerPadding": "33px 55px",
                            "anchor": "",
                            "textAlign": "center",
                            "lineHeight": "160%",
                            "linkStyle": {
                                "inherit": true,
                                "linkColor": "#0000ee",
                                "linkHoverColor": "#0000ee",
                                "linkUnderline": true,
                                "linkHoverUnderline": true
                            },
                            "hideDesktop": false,
                            "displayCondition": null,
                            "_meta": {
                                "htmlID": "u_content_text_6",
                                "htmlClassNames": "u_content_text"
                            },
                            "selectable": true,
                            "draggable": true,
                            "duplicatable": true,
                            "deletable": true,
                            "hideable": true,
                            "text": "<p style=\"font-size: 14px; line-height: 160%;\"><span style=\"font-size: 22px; line-height: 35.2px;\">Hi, </span></p>\n<p style=\"font-size: 14px; line-height: 160%;\"><span style=\"font-size: 18px; line-height: 28.8px;\">You're almost ready to get started. Please click on the button below to verify your email address and enjoy exclusive cleaning services with us!&nbsp;</span></p>",
                            "hideMobile": false
                        }
                    }, {
                        "id": "1LIUXWmXQV",
                        "type": "button",
                        "values": {
                            "containerPadding": "10px",
                            "anchor": "",
                            "href": {
                                "name": "web",
                                "values": {
                                    "href": "",
                                    "target": "_blank"
                                }
                            },
                            "buttonColors": {
                                "color": "#FFFFFF",
                                "backgroundColor": "#ff6600",
                                "hoverColor": "#FFFFFF",
                                "hoverBackgroundColor": "#3AAEE0"
                            },
                            "size": {
                                "autoWidth": true,
                                "width": "100%"
                            },
                            "textAlign": "center",
                            "lineHeight": "120%",
                            "padding": "14px 44px 13px",
                            "border": {},
                            "borderRadius": "4px",
                            "hideDesktop": false,
                            "displayCondition": null,
                            "_meta": {
                                "htmlID": "u_content_button_1",
                                "htmlClassNames": "u_content_button"
                            },
                            "selectable": true,
                            "draggable": true,
                            "duplicatable": true,
                            "deletable": true,
                            "hideable": true,
                            "text": "<span style=\"font-size: 16px; line-height: 19.2px;\"><strong><span style=\"line-height: 19.2px; font-size: 16px;\">VERIFY YOUR EMAIL</span></strong></span>",
                            "hideMobile": false,
                            "calculatedWidth": 234,
                            "calculatedHeight": 46
                        }
                    }, {
                        "id": "jv44qM8wHX",
                        "type": "text",
                        "values": {
                            "containerPadding": "33px 55px 60px",
                            "anchor": "",
                            "textAlign": "center",
                            "lineHeight": "160%",
                            "linkStyle": {
                                "inherit": true,
                                "linkColor": "#0000ee",
                                "linkHoverColor": "#0000ee",
                                "linkUnderline": true,
                                "linkHoverUnderline": true
                            },
                            "hideDesktop": false,
                            "displayCondition": null,
                            "_meta": {
                                "htmlID": "u_content_text_7",
                                "htmlClassNames": "u_content_text"
                            },
                            "selectable": true,
                            "draggable": true,
                            "duplicatable": true,
                            "deletable": true,
                            "hideable": true,
                            "text": "<p style=\"line-height: 160%; font-size: 14px;\"><span style=\"font-size: 18px; line-height: 28.8px;\">Thanks,</span></p>\n<p style=\"line-height: 160%; font-size: 14px;\"><span style=\"font-size: 18px; line-height: 28.8px;\">The Company Team</span></p>",
                            "hideMobile": false
                        }
                    }],
                    "values": {
                        "_meta": {
                            "htmlID": "u_column_4",
                            "htmlClassNames": "u_column"
                        },
                        "border": {},
                        "padding": "0px",
                        "backgroundColor": ""
                    }
                }],
                "values": {
                    "displayCondition": null,
                    "columns": false,
                    "backgroundColor": "",
                    "columnsBackgroundColor": "#ffffff",
                    "backgroundImage": {
                        "url": "",
                        "fullWidth": true,
                        "repeat": false,
                        "center": true,
                        "cover": false
                    },
                    "padding": "0px",
                    "anchor": "",
                    "hideDesktop": false,
                    "_meta": {
                        "htmlID": "u_row_4",
                        "htmlClassNames": "u_row"
                    },
                    "selectable": true,
                    "draggable": true,
                    "duplicatable": true,
                    "deletable": true,
                    "hideable": true,
                    "hideMobile": false,
                    "noStackMobile": false
                }
            }, {
                "id": "vL1wh6lqva",
                "cells": [1],
                "columns": [{
                    "id": "bCoEU1ZQw9",
                    "contents": [{
                        "id": "uVD25dAKpK",
                        "type": "text",
                        "values": {
                            "containerPadding": "41px 55px 18px",
                            "anchor": "",
                            "color": "#003399",
                            "textAlign": "center",
                            "lineHeight": "160%",
                            "linkStyle": {
                                "inherit": true,
                                "linkColor": "#0000ee",
                                "linkHoverColor": "#0000ee",
                                "linkUnderline": true,
                                "linkHoverUnderline": true
                            },
                            "hideDesktop": false,
                            "displayCondition": null,
                            "_meta": {
                                "htmlID": "u_content_text_5",
                                "htmlClassNames": "u_content_text"
                            },
                            "selectable": true,
                            "draggable": true,
                            "duplicatable": true,
                            "deletable": true,
                            "hideable": true,
                            "text": "<p style=\"font-size: 14px; line-height: 160%;\"><span style=\"font-size: 20px; line-height: 32px;\"><strong>Get in touch</strong></span></p>\n<p style=\"font-size: 14px; line-height: 160%;\"><span style=\"font-size: 16px; line-height: 25.6px; color: #000000;\">+11 111 333 4444</span></p>\n<p style=\"font-size: 14px; line-height: 160%;\"><span style=\"font-size: 16px; line-height: 25.6px; color: #000000;\">Info@YourCompany.com</span></p>",
                            "hideMobile": false
                        }
                    }, {
                        "id": "6dC6p22b1W",
                        "type": "social",
                        "values": {
                            "containerPadding": "10px 10px 33px",
                            "anchor": "",
                            "icons": {
                                "iconType": "circle-black",
                                "icons": [{
                                    "url": "https://facebook.com/",
                                    "name": "Facebook"
                                }, {
                                    "url": "https://linkedin.com/",
                                    "name": "LinkedIn"
                                }, {
                                    "url": "https://instagram.com/",
                                    "name": "Instagram"
                                }, {
                                    "url": "https://youtube.com/",
                                    "name": "YouTube"
                                }, {
                                    "url": "https://email.com/",
                                    "name": "Email"
                                }],
                                "editor": {
                                    "data": {
                                        "showDefaultIcons": true,
                                        "showDefaultOptions": true,
                                        "customIcons": [],
                                        "customOptions": []
                                    }
                                }
                            },
                            "align": "center",
                            "spacing": 17,
                            "hideDesktop": false,
                            "displayCondition": null,
                            "_meta": {
                                "htmlID": "u_content_social_1",
                                "htmlClassNames": "u_content_social"
                            },
                            "selectable": true,
                            "draggable": true,
                            "duplicatable": true,
                            "deletable": true,
                            "hideable": true,
                            "hideMobile": false
                        }
                    }],
                    "values": {
                        "_meta": {
                            "htmlID": "u_column_5",
                            "htmlClassNames": "u_column"
                        },
                        "border": {},
                        "padding": "0px",
                        "backgroundColor": ""
                    }
                }],
                "values": {
                    "displayCondition": null,
                    "columns": false,
                    "backgroundColor": "",
                    "columnsBackgroundColor": "#e5eaf5",
                    "backgroundImage": {
                        "url": "",
                        "fullWidth": true,
                        "repeat": false,
                        "center": true,
                        "cover": false
                    },
                    "padding": "0px",
                    "anchor": "",
                    "hideDesktop": false,
                    "_meta": {
                        "htmlID": "u_row_5",
                        "htmlClassNames": "u_row"
                    },
                    "selectable": true,
                    "draggable": true,
                    "duplicatable": true,
                    "deletable": true,
                    "hideable": true,
                    "hideMobile": false,
                    "noStackMobile": false
                }
            }, {
                "id": "GTVm0gepkY",
                "cells": [1],
                "columns": [{
                    "id": "VhaDikXzX4",
                    "contents": [{
                        "id": "pPHwBsEN68",
                        "type": "text",
                        "values": {
                            "containerPadding": "10px",
                            "anchor": "",
                            "color": "#fafafa",
                            "textAlign": "center",
                            "lineHeight": "180%",
                            "linkStyle": {
                                "inherit": true,
                                "linkColor": "#0000ee",
                                "linkHoverColor": "#0000ee",
                                "linkUnderline": true,
                                "linkHoverUnderline": true
                            },
                            "hideDesktop": false,
                            "displayCondition": null,
                            "_meta": {
                                "htmlID": "u_content_text_8",
                                "htmlClassNames": "u_content_text"
                            },
                            "selectable": true,
                            "draggable": true,
                            "duplicatable": true,
                            "deletable": true,
                            "hideable": true,
                            "text": "<p style=\"font-size: 14px; line-height: 180%;\"><span style=\"font-size: 16px; line-height: 28.8px;\">Copyrights &copy; Company All Rights Reserved</span></p>",
                            "hideMobile": false
                        }
                    }],
                    "values": {
                        "_meta": {
                            "htmlID": "u_column_6",
                            "htmlClassNames": "u_column"
                        },
                        "border": {},
                        "padding": "0px",
                        "backgroundColor": ""
                    }
                }],
                "values": {
                    "displayCondition": null,
                    "columns": false,
                    "backgroundColor": "",
                    "columnsBackgroundColor": "#003399",
                    "backgroundImage": {
                        "url": "",
                        "fullWidth": true,
                        "repeat": false,
                        "center": true,
                        "cover": false
                    },
                    "padding": "0px",
                    "anchor": "",
                    "hideDesktop": false,
                    "_meta": {
                        "htmlID": "u_row_6",
                        "htmlClassNames": "u_row"
                    },
                    "selectable": true,
                    "draggable": true,
                    "duplicatable": true,
                    "deletable": true,
                    "hideable": true,
                    "hideMobile": false,
                    "noStackMobile": false
                }
            }],
            "values": {
                "popupPosition": "center",
                "popupWidth": "600px",
                "popupHeight": "auto",
                "borderRadius": "10px",
                "contentAlign": "center",
                "contentVerticalAlign": "center",
                "contentWidth": "600px",
                "fontFamily": {
                    "label": "Cabin",
                    "value": "'Cabin',sans-serif",
                    "url": "https://fonts.googleapis.com/css?family=Cabin:400,700",
                    "defaultFont": true
                },
                "textColor": "#000000",
                "popupBackgroundColor": "#FFFFFF",
                "popupBackgroundImage": {
                    "url": "",
                    "fullWidth": true,
                    "repeat": false,
                    "center": true,
                    "cover": true
                },
                "popupOverlay_backgroundColor": "rgba(0, 0, 0, 0.1)",
                "popupCloseButton_position": "top-right",
                "popupCloseButton_backgroundColor": "#DDDDDD",
                "popupCloseButton_iconColor": "#000000",
                "popupCloseButton_borderRadius": "0px",
                "popupCloseButton_margin": "0px",
                "popupCloseButton_action": {
                    "name": "close_popup",
                    "attrs": {
                        "onClick": "document.querySelector('.u-popup-container').style.display = 'none';"
                    }
                },
                "backgroundColor": "#f9f9f9",
                "backgroundImage": {
                    "url": "",
                    "fullWidth": true,
                    "repeat": false,
                    "center": true,
                    "cover": false
                },
                "preheaderText": "",
                "linkStyle": {
                    "body": true,
                    "linkColor": "#0000ee",
                    "linkHoverColor": "#0000ee",
                    "linkUnderline": true,
                    "linkHoverUnderline": true
                },
                "_meta": {
                    "htmlID": "u_body",
                    "htmlClassNames": "u_body"
                }
            }
        },
        "schemaVersion": 9
    };
    emailEditorRef.current.editor.loadDesign(templateJson);
  };

  const onReady = () => {
    // editor is ready
    console.log("onReady");
  };

  return (
    <div>
      <div>
        <button onClick={exportHtml}>Export HTML</button>
      </div>

      <EmailEditor 
        ref={emailEditorRef} 
        onLoad={onLoad} 
        onReady={onReady} 
        />
    </div>
  );
};

// const mapDispatch = (dispatch, {params}) => {
//     return {
//         exportToHtml: (html)=>{
//         console.log('>>>>>>', html)
//       },
//     };
//   };
const mapState = (state) => {
      console.log('>>>',state);
      return {
        username: state.auth.username,
        workouts: state.workoutsSlice,
      };
};

  export default connect(state => state, null)(Editor);
