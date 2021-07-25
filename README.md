## Jom Solat API

Currently hosted at https://api.jomsolat.org/zone/WLY01

Example above is to get today solat time for Kuala Lumpur, Putrajaya (WLY01)

This API has only one endpoint:
> http://localhost:3000/zone/:zoneId

Example result:
```json
{
  "_id": "66fcefc888888881e434aa5d",
  "zone": "TRG04",
  "zoneName": "Dungun, Kemaman",
  "hijri": "1442-12-15",
  "date": "2021-07-25",
  "day": "Sunday",
  "imsak": "05:42:00",
  "fajr": "05:52:00",
  "syuruk": "07:05:00",
  "dhuhr": "13:17:00",
  "asr": "16:39:00",
  "maghrib": "19:26:00",
  "isha": "20:39:00"
}
```

Data are parsed and modified (ISO 8601 for date) from JAKIM e-solat API