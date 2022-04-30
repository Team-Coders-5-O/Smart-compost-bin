import busio
import digitalio
import board
import adafruit_mcp3xxx.mcp3008 as MCP
from adafruit_mcp3xxx.analog_in import AnalogIn
import time

# create the spi bus
spi = busio.SPI(clock=board.SCK, MISO=board.MISO, MOSI=board.MOSI)
 
# create the cs (chip select)
cs = digitalio.DigitalInOut(board.D5)
 
# create the mcp object
mcp = MCP.MCP3008(spi, cs)
 
# create an analog input channel on pin 0
chan = AnalogIn(mcp, MCP.P0)

def getMoistureVoltage():
    return chan.voltage


def getMoistureState():
  raw_value =  chan.value
  state = "N/A"
  if(chan.voltage> 1.8 and chan.voltage <2.3):
     state = "WET"
  elif (chan.voltage > 2.3 and chan.voltage < 3.0):
     state = "DRY"
  return state
 
if __name__ == '__main__':
    while True:
        print(getMoistureVoltage())
        time.sleep(1)


