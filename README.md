# soccer-scrape
> Scrape football data from Bet365

[![npm version](https://badge.fury.io/js/soccer-scrape.svg)](https://badge.fury.io/js/soccer-scrape)

A pretty rigid library to fetch todays __unplayed__ fixtures. It currently only supports three attributes, and comes from a defined source, Bet365, because they have the most extensive, whacky leagues available.

## Installation

OS X & Linux:

```sh
npm install soccer-scrape --save
```

## Usage example

Currently the only function available is `getFixtures`, this returns an object.

```javascript
import { getFixtures } from 'soccer-scrape'

const data = getFixtures()

/*
{
    "scheduled": "19:30",
    "teams": {
        "home": "AC Milan U19",
        "away": "Pro Vercelli U19"
    }
}
*/
```

## Development setup

```sh
git clone git@github.com:o8e/soccer-scrape.git
```
```sh
npm i
```
```sh
npm run dev
```

## Release History

* 0.0.2
    * Update docs and publish to NPM (module code remains unchanged)
    * Add testing with mocha/chai and configure travis
* 0.0.1
    * Develop initial function to fetch fixtures

## Meta

Ollie Tribe – tribe@myself.com

Distributed under the MIT license. See ``LICENSE`` for more information.

[https://github.com/o8e](https://github.com/o8e)

## Contributing

1. Fork it (<https://github.com/o8e/soccer-scrape/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request
