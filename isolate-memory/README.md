# isolate memory

Checking Cloudflare Workers' isolate memory persistence.

Running on https://isolate-memory.hyperknot.com/



Same color in grid -> same isolate is handling all the requests.

It seems that browsers are pinned to the same isolate, so they get the same color.

Private window -> New color

Different browser -> New color

Wifi off & on -> New color



curl always gets a different one. Can be checked with:

```
curl https://isolate-memory.hyperknot.com/1/2
```



