import cv2

video = cv2.VideoCapture(0)

a = 0


def capture():
    check, frame = video.read()
    #key = cv2.waitKey(1)
    #cv2.imshow("Capturing",frame)
    showPic = cv2.imwrite("compost.jpg",frame)
    video.release()


capture()