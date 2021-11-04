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

smooth = 5
pTime = 0
plocX,plocY = 0,0
clocX,clocY = 0,0
###############

cap = cv2.VideoCapture(0)
cap.set(3, wCam)
cap.set(4, hCam)
pTime = 0
detector = htm.handDetector(maxHands=1)

while True:
    #1. หามือ
    success, img0 = cap.read()
    img = cv2.flip(img0,1)
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
    # สร้างframe

            # --------------------บัค
            x3 = np.interp(x1, (frameR, wCam-frameR), (0, wScr))
            y3 = np.interp(y1, (frameR, hCam-frameR), (0, hScr))

            # print("นิวชี้")

            # clocX = plocX +(x3-plocX) / smooth
            # clocY = plocY + (x3 - plocY) / smooth
    #--------------------บัค
    #ขยับเมาส์


            cX = plocX + (x3 - plocX) * 0.9999
            cY = plocY + (y3 - plocY) * 0.9999

            autopy.mouse.move(cX, cY)
            # autopy.mouse.move(clocX,clocY)
            cv2.circle(img,(x1,y1),10,(0,255,0),cv2.FILLED)
            plocX,plocY = clocX,clocY
    #--------------- เพิ่มลูกเล่น
        # if fingers[0] ==1:
        #     print("นิ้วโป้ง")
        #
        # if fingers[2] ==1:
        #     print("นิ้วกลาง")
        #
        # if fingers[3] ==1:
        #     print("นิ้วนาง")
        #
        # if fingers[4] ==1:
        #     print("นิ้วก้อย")
    #---------------
        if fingers[1] == 1 and fingers[2] == 1:
            length, img, lineInfo = detector.findDistance(8,12,img)
            # print(length)
            ##click-------------
            if length < 40:
                cv2.circle(img,(lineInfo[4],lineInfo[5]),15,(255,0,255),cv2.FILLED)
                print("click")
                autopy.mouse.click()
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
