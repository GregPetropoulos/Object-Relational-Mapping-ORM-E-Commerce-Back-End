
# Object-Relational-Mapping-ORM-E-Commerce-Back-End

![GitHub License Badge](https://shields.io/badge/license-MIT-green)

## Description

Internet retail, also known as e-commerce, is the largest sector of the electronics industry, generating an estimated $29 trillion in 2019. E-commerce platforms like Shopify and WooCommerce provide a suite of services to businesses of all sizes. Due to their prevalence, understanding the fundamental architecture of these platforms will benefit a full-stack web developer.

### User Story

As a manager at an internet retail company
I want a back end for my e-commerce website that uses the latest technologies
so that my company can compete with other e-commerce companies

### Task

Build the back end for an e-commerce site by modifying starter code. You’ll configure a working Express.js API to use Sequelize to interact with a MySQL database.


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Badges](#badges)
- [Features](#features)
- [How to Contribute](#how-to-contribute)
- [Test](#test)
- [Code of Conduct](#contributor-covenant-code-of-conduct)
- [License](#license)

## Installation

The appropriate packages consists of

- npm i
- npm init
- npm install mysql2
- npm install doetenv
- npm install express

## Dependencies

```
"dependencies": {
    "dotenv": "^8.2.0",
    "express": "^4.17.1",
    "mysql2": "^2.2.5",
    "sequelize": "^5.22.4"
  }
```



### Database Models

database should contain the following four models, including the requirements listed for each model:

- `Category`

  - `id`

    - Integer.

    - Doesn't allow null values.

    - Set as primary key.

    - Uses auto increment.

  - `category_name`

    - String.

    - Doesn't allow null values.

- `Product`

  - `id`

    - Integer.

    - Doesn't allow null values.

    - Set as primary key.

    - Uses auto increment.

  - `product_name`

    - String.

    - Doesn't allow null values.

  - `price`

    - Decimal.

    - Doesn't allow null values.

    - Validates that the value is a decimal.

  - `stock`

    - Integer.

    - Doesn't allow null values.

    - Set a default value of `10`.

    - Validates that the value is numeric.

  - `category_id`

    - Integer.

    - References the `Category` model's `id`.

- `Tag`

  - `id`

    - Integer.

    - Doesn't allow null values.

    - Set as primary key.

    - Uses auto increment.

  - `tag_name`

    - String.

- `ProductTag`

  - `id`

    - Integer.

    - Doesn't allow null values.

    - Set as primary key.

    - Uses auto increment.

  - `product_id`

    - Integer.

    - References the `Product` model's `id`.

  - `tag_id`

    - Integer.

    - References the `Tag` model's `id`.

 ### Classes

In Product.js initialize Product model (table) by extending off Sequelize's Model class

```
class Product extends Model {}
```

In Category.js initialize Category model (table) by extending off Sequelize's Model class

```
class Category extends Model {}
```

In ProductTag.js initialize ProductTag. model (table) by extending off Sequelize's Model class

```
class ProductTag extends Model {}

```

In Tag.js initialize Tag. model (table) by extending off Sequelize's Model class

```
class Tag extends Model {}
```

The seeds directory contains a seed for category, product, product-tag, tag, and index.js.

-- After running the

```
 npm run seeds

```

command the ecommerce_db in mysql workbench was seeded and verified on mysql workbench.


## Associations

In the index.js file of models directory the associations were created with these methods `belongsTo`, `hasMany`, `belongsToMany` were used to associate the appropriate tables

## Video

Insomnia Walk Through
https://youtu.be/xQemFWT0NO8

## All CRUD operations successful with use of **GET, POST,PUT, DELETE.**

[![Insomnia Back End Walk Through ](http://img.youtube.com/vi/xQemFWT0NO8/0.jpg)](http://www.youtube.com/watch?v=xQemFWT0NO8)

---

---

## VS Code Walk Through

[![VS Code Walk Through](http://img.youtube.com/vi/2jpFEAxsDJc/0.jpg)](http://www.youtube.com/watch?v=2jpFEAxsDJc "Ecommerce Code Walk through")

## Credits

https://sqlbolt.com/lesson/select_queries_introduction

https://guides.github.com/features/mastering-markdown/

https://sequelize.org/master/manual/model-querying-finders.html

## Badges

[![forthebadge](https://forthebadge.com/images/badges/approved-by-george-costanza.svg)](https://github.com/gregpetropoulos)
[![forthebadge](https://forthebadge.com/images/badges/built-with-science.svg)](https://github.com/gregpetropoulos)
[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://github.com/gregpetropoulos)



## Acceptance Criteria

- A functional Express.js API will add my database name, MySQL username, and MySQL password to an environment variable file.

- I am able to connect to a database using Sequelize

- I enter schema and seed commands

- A development database is created and is seeded with test data

- I enter the command to invoke the application and my server is started and the Sequelize models are synced to the MySQL database

- Open API GET routes in Insomnia Core for categories, products, or tags and the data for each of these routes is displayed in a formatted JSON

- Test API POST, PUT, and DELETE routes in Insomnia Core and successfully create, update, and delete data in my database
## Features

Use the CLI to CRUD.

## How to Contribute

Add a comment prior to contribution

## Tests

No testing on this app

## Contributor Covenant Code of Conduct

### Our Pledge

We as members, contributors, and leaders pledge to make participation in our
community a harassment-free experience for everyone, regardless of age, body
size, visible or invisible disability, ethnicity, sex characteristics, gender
identity and expression, level of experience, education, socio-economic status,
nationality, personal appearance, race, caste, color, religion, or sexual identity
and orientation.

We pledge to act and interact in ways that contribute to an open, welcoming,
diverse, inclusive, and healthy community.

## Our Standards

Examples of behavior that contributes to a positive environment for our
community include:

- Demonstrating empathy and kindness toward other people
- Being respectful of differing opinions, viewpoints, and experiences
- Giving and gracefully accepting constructive feedback
- Accepting responsibility and apologizing to those affected by our mistakes,
  and learning from the experience
- Focusing on what is best not just for us as individuals, but for the
  overall community

Examples of unacceptable behavior include:

- The use of sexualized language or imagery, and sexual attention or
  advances of any kind
- Trolling, insulting or derogatory comments, and personal or political attacks
- Public or private harassment
- Publishing others' private information, such as a physical or email
  address, without their explicit permission
- Other conduct which could reasonably be considered inappropriate in a
  professional setting

## Enforcement Responsibilities

Community leaders are responsible for clarifying and enforcing our standards of
acceptable behavior and will take appropriate and fair corrective action in
response to any behavior that they deem inappropriate, threatening, offensive,
or harmful.

Community leaders have the right and responsibility to remove, edit, or reject
comments, commits, code, wiki edits, issues, and other contributions that are
not aligned to this Code of Conduct, and will communicate reasons for moderation
decisions when appropriate.

## Scope

This Code of Conduct applies within all community spaces, and also applies when
an individual is officially representing the community in public spaces.
Examples of representing our community include using an official e-mail address,
posting via an official social media account, or acting as an appointed
representative at an online or offline event.

## Enforcement

Instances of abusive, harassing, or otherwise unacceptable behavior may be
reported to the community leaders responsible for enforcement at
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.0-4baaaa.svg)](code_of_conduct.md).
All complaints will be reviewed and investigated promptly and fairly.

All community leaders are obligated to respect the privacy and security of the
reporter of any incident.

## Enforcement Guidelines

Community leaders will follow these Community Impact Guidelines in determining
the consequences for any action they deem in violation of this Code of Conduct:

### 1. Correction

**Community Impact**: Use of inappropriate language or other behavior deemed
unprofessional or unwelcome in the community.

**Consequence**: A private, written warning from community leaders, providing
clarity around the nature of the violation and an explanation of why the
behavior was inappropriate. A public apology may be requested.

### 2. Warning

**Community Impact**: A violation through a single incident or series
of actions.

**Consequence**: A warning with consequences for continued behavior. No
interaction with the people involved, including unsolicited interaction with
those enforcing the Code of Conduct, for a specified period of time. This
includes avoiding interactions in community spaces as well as external channels
like social media. Violating these terms may lead to a temporary or
permanent ban.

### 3. Temporary Ban

**Community Impact**: A serious violation of community standards, including
sustained inappropriate behavior.

**Consequence**: A temporary ban from any sort of interaction or public
communication with the community for a specified period of time. No public or
private interaction with the people involved, including unsolicited interaction
with those enforcing the Code of Conduct, is allowed during this period.
Violating these terms may lead to a permanent ban.

### 4. Permanent Ban

**Community Impact**: Demonstrating a pattern of violation of community
standards, including sustained inappropriate behavior, harassment of an
individual, or aggression toward or disparagement of classes of individuals.

**Consequence**: A permanent ban from any sort of public interaction within
the community.

## Attribution

This Code of Conduct is adapted from the [Contributor Covenant][homepage],
version 2.0, available at
[https://www.contributor-covenant.org/version/2/0/code_of_conduct.html][v2.0].

Community Impact Guidelines were inspired by
[Mozilla's code of conduct enforcement ladder][mozilla coc].

For answers to common questions about this code of conduct, see the FAQ at
[https://www.contributor-covenant.org/faq][faq]. Translations are available
at [https://www.contributor-covenant.org/translations][translations].

[homepage]: https://www.contributor-covenant.org
[v2.0]: https://www.contributor-covenant.org/version/2/0/code_of_conduct.html
[mozilla coc]: https://github.com/mozilla/diversity
[faq]: https://www.contributor-covenant.org/faq
[translations]: https://www.contributor-covenant.org/translations

## License

![GitHub License Badge](https://shields.io/badge/license-MIT-green)

Copyright (c) [2021] [Greg Petropoulos]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Questions

### Contact:

Github: [https://github.com/gregpetropoulos](https://github.com/gregpetropoulos)

Email: <gregpetropoulos@yahoo.com>
