import Adafruit_DHT
import time
 
DHT_SENSOR = Adafruit_DHT.DHT11
DHT_PIN = 4

def get_temp():
   humidity, temperature = Adafruit_DHT.read_retry(DHT_SENSOR, DHT_PIN)
   return humidity , temperature


if __name__ == '__main__':
    while True:
        print(get_temp())
        time.sleep(1)

