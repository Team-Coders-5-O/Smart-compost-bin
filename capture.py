import subprocess


def capture_image():
    subprocess.run(['fswebcam','-r 1280x720' ,'--no-banner' , 'image.jpg'])
    

if __name__ == '__main__':
    capture_image()
