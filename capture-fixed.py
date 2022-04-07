import cv2

video = cv2.VideoCapture(0)



def capture():
    while True:
       check, frame = video.read()  
       cv2.imshow("Capturing",frame)
       if cv2.waitKey(1):
           break
           


    showPic = cv2.imwrite("compost.jpg",frame)
    video.release()
    cv2.destroyAllWindows()


capture()
