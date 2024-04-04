// Here's a revised version of your video component with potential fixes:



import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const Video = () => {
  const location = useLocation(); // Use useLocation to access the query parameters
  const queryParams = new URLSearchParams(location.search);
  const roomID = queryParams.get('name'); // Get the 'name' query parameter from the URL

  const videoElement = useRef(null);

  useEffect(() => {
    const myMeeting = async () => {
      const appID = 556904512;
      const serverSecret = "97725ffad3a55ec52b7a854777828d69";
      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, Date.now().toString(), "tigerCoder");

      const zp = ZegoUIKitPrebuilt.create(kitToken);

      zp.joinRoom({
        container: videoElement.current,
        sharedLinks: [
          {
            name: 'copy link',
            url: `${window.location.protocol}//${window.location.host}${window.location.pathname}?roomID=${roomID}`,
          },
        ],
        scenario: {
          mode: ZegoUIKitPrebuilt.OneONoneCall,
        },
      });
    };

    myMeeting();
  }, [roomID]);

  return (
    <div
      className="myCallContainer"
      style={{ width: '100vw', height: '100vh' }}
    >
      <div ref={videoElement}></div>
    </div>
  );
};

export default Video;