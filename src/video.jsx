import React from 'react'
   import { useParams } from 'react-router-dom'
   import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
const video = () => {
    const { id } = useParams()
     const roomID = id
      let myMeeting = async (element) => {
     // generate Kit Token
      const appID = 556904512;
      const serverSecret = "97725ffad3a55ec52b7a854777828d69";
      const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID,  Date.now().toString(),  "tigerCoder");

     // Create instance object from Kit Token.
      const zp = ZegoUIKitPrebuilt.create(kitToken);
      // start the call
      zp.joinRoom({
        container: element,
        sharedLinks: [
          {
            name: 'copy link',
            url:
             window.location.protocol + '//' + 
             window.location.host + window.location.pathname +
              '?roomID=' +
              roomID,
          },
        ],
        scenario: {
          mode: ZegoUIKitPrebuilt.OneONoneCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
        },
      });
    }
  return (
    <div
    className="myCallContainer"
    ref={myMeeting}
    style={{ width: '100vw', height: '100vh' }}
  ></div>
  )
}

export default video