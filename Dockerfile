FROM python:3.8-slim

COPY requirements.txt ./

RUN pip install --no-cache-dir -r requirements.txt

RUN apt-get update && apt-get install make

WORKDIR /usr/who_clean

COPY . .
