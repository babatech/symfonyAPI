Advertisement API application with symfony, React, Docker and Sqlite
=======

A demo project for Advertisement API with symfony 4.2, Doctrine, React and sample data in Sqlite database

How to run
-------------
#### Pre-prerequisites ####
```
PHP > 7.2
NPM
composer
Docker
```

#### With Symfony console  ####
```
Clone the Repository 
cd to project directory
Run command "composer install"
Run command "php bin/console server:run"
Check http://localhost:8000/
```
#### With docker  ####
```
Clone the Repository 
cd to project directory
Run command "composer install"
Run command "docker-compose up"
Check http://localhost:8000/
```

SQL queries:
-------
### showing all campaigns of advertiser #100 that have more than 50 ads ###
```
SELECT c.name, count(a.campaign_id) AS numberOfAds
FROM campaign c
LEFT JOIN ads a ON (c.id = a.campaign_id)
WHERE c.advertiser_id = 100
GROUP BY c.id
HAVING numberOfAds > 50
```
http://localhost:8000/campaign/100/50  
run the app to see the test url

### showing all campaigns that do not have any ads ###
```
SELECT c.id as campaignID, c.name AS campaignName , count(a.campaign_id) AS numberOfAds
FROM campaign c
LEFT JOIN ads a
ON (c.id = a.campaign_id)
GROUP BY c.id
HAVING numberOfAds = 0
```
http://localhost:8000/campaign/withoutad
run the app to see the test url

API
-------
### selecting a specific ad ###

Protocol: HTTP  
Method: GET  
URi: ad/adID  
Content-Type:application/json  
RequestBody:
```
{ }
```
http://localhost:8000/ad/2  
run the app to see the test url

### selecting all ads of a specific campaign ###

Protocol: HTTP  
Method: GET  
URi: campaign/campaignID  
Content-Type:application/json  
RequestBody:
```
{ }
```
http://localhost:8000/campaign/100  
run the app to see the test url

### selecting all ads of a specific advertiser ###

Protocol: HTTP  
Method: GET  
URi: advertiser/listads/advertiserID  
Content-Type:application/json  
RequestBody:
```
{ }
```
http://localhost:8000/advertiser/listads/80  
run the app to see the test url

### creating an ad ###

Protocol: HTTP  
Method: POST  
URi: ad/new  
Content-Type:application/json  
RequestBody:
```
{
 "action": "NewAd"
 "ad": {
   "title": "Sample title",
   "text": "Sample text"
   "image": "Sample image"
   "sponsoredBy": "Sample Sponsor"
   "trackingUrl": "sample URL"
 }
}
```
No server implementation of this functionality

### modifying a specific ad  ###

Protocol: HTTP
Method: PUT
URi: ad/update/adID
Content-Type:application/json
RequestBody:
```
{
 "action": "UpdateAd",
 "id": "AdID",
 "ad": {
   "title": "Updated title",
   "text": "Updated text"
   "image": "Updated image"
   "sponsoredBy": "Updated Sponsor"
   "trackingUrl": "Updated URL"
 }
}
```
No server implementation of this functionality

Device Detection 
------------
Run the symfony app to see this functionality on home Url 
http://localhost:8000/