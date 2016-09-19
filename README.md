# Thingspeak-NodeJS-POST
1. Create a https://thingspeak.com account
2. Create a feed
3. Replace your api key in thingspeak.js
4. Play!

You can test your ThingSpeak API key and channel combination by opening a terminal application and doing 

```bash
curl -X POST -d api_key=YOURWRITEAPIKEY -d field1=SOMEVALUE https://api.thingspeak.com/update
```
