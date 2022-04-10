import Adafruit_DHT
import time
 
DHT_SENSOR = Adafruit_DHT.DHT11
DHT_PIN = 4

def get_temp():
   humidity, temperature = Adafruit_DHT.read(DHT_SENSOR, DHT_PIN)
   return humidity , temperature

