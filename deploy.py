#!/usr/bin/python
import sys
with open('deployment.yml', 'r') as file:
  filedata = file.read()
filedata = filedata.replace('CI_PIPELINE_ID', str(sys.argv[1]))
with open('deployment.yml', 'w') as file:
  file.write(filedata)
