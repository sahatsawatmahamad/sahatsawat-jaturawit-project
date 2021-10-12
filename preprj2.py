import cv2
import numpy as np
import HandTrackingModule as htm
import time
import autopy

###############
wScr, hScr = autopy.screen.size()
print(wScr,hScr)
wCam, hCam = 640, 480
frameR = 100 #frame Reduction
# frameCenter = (int(wScr)/2,int(hScr)/2)

###############

cap = cv2.VideoCapture(0)
cap.set(3, wCam)
cap.set(4, hCam)
pTime = 0
detector = htm.handDetector(maxHands=1)


while True:
    #1. หามือ
    success, img = cap.read()
    img = detector.findHands(img)
    lmList, bbox = detector.findPosition(img)


    #
    if len(lmList)!=0:
        x1, y1 = lmList[8][1:]
        x2, y2 = lmList[12][1:]

        # print(x1,y1,x2,y2)
    #
        fingers = detector.fingersUp()
        print(fingers)
        cv2.circle(img, (320, 240), 5, (255, 0, 0), 10)
        cv2.rectangle(img, (frameR, frameR), (wCam - frameR, hCam - frameR), (255, 0, 255), 2)

    #
        if fingers[1] ==1 and fingers[2] ==0:

            # x3 = np.interp(x1, (0,wCam),(0,wScr))
            # y3 = np.interp(y1, (0, hCam), (0, hScr))
    #สร้างframe
            x3 = np.interp(x1, (frameR, wCam-frameR), (0, wScr))
            y3 = np.interp(y1, (frameR, hCam-frameR), (0, hScr))
    #
    #ขยับเมาส์
            autopy.mouse.move(x3,y3)
            cv2.circle(img,(x1,y1),10,(0,255,0),cv2.FILLED)
    #
        if fingers[1] == 1 and fingers[2] == 1:
            length, img, lineInfo = detector.findDistance(8,12,img)
            print(length)
            ##click-------------
            # if length < 20:
            #     cv2.circle(img,(lineInfo[4],lineInfo[5]),15,(255,0,255),cv2.FILLED)
            #     autopy.mouse.click()
            #---------------------
    #
    #
    #
    #frame rate
    cTime = time.time()
    fps = 1/(cTime-pTime)
    pTime = cTime
    cv2.putText(img,str(int(fps)),(20,50),cv2.FONT_HERSHEY_PLAIN,3,(255,0,0),3)
    #


    cv2.imshow("Image", img)
    cv2.waitKey(1)
