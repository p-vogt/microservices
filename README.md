# Microservices

Microservices kommunizieren mit zwei Rapsberry Pis, welche Sensoren für Luftfeuchtigkeit, Helligkeit und Temperatur haben und die Daten übergeben.
Über Events werden die LEDs gesteuert.

## Services
- Temperatur-Service
- Helligkeit-Service
- Luftfeuchttigkeit-Service
- LED-Services

## Ereignisse
1. Temperatur > x: LED 1/2 an, Alarm
2. Helligkeit < x: LED 2 an, Alarm
3. LED 1 Status geändert: Event
4. LED 2 Status geändert: Event