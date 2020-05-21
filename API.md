# API routes and naming of fields
***1: The fields mentioned below are the ones that need to be used in the frontend for axios requests.***

***2: In URLs, words that start with `:` are variables.***

## Table of contents
* [Companies](https://github.com/JAMKT/team-management-app/blob/master/API.md#companies)
* [Faqs](https://github.com/JAMKT/team-management-app/blob/master/API.md#faqs)
* [Jobs](https://github.com/JAMKT/team-management-app/blob/master/API.md#jobs)
* [Onboarding](https://github.com/JAMKT/team-management-app/blob/master/API.md#onboarding)
* [Projects](https://github.com/JAMKT/team-management-app/blob/master/API.md#projects)
* [Responsibilities](https://github.com/JAMKT/team-management-app/blob/master/API.md#responsibilities)
* [Tasks](https://github.com/JAMKT/team-management-app/blob/master/API.md#tasks)
* [Users](https://github.com/JAMKT/team-management-app/blob/master/API.md#users)

## Companies
### Routes
```
GET:    /api/companies/
GET:    /api/companies/:id
POST*:  /api/companies/
PUT*:   /api/companies/:id
DELETE: /api/companies/delete/:id
```
### Fields
For both **POST** and **PUT**:
* name (string)
* description (string, ***optional***)
* address (string, ***optional***)
* email (string)


## Faqs
### Routes
```
GET:    /api/faqs/
GET:    /api/faqs/categories
GET:    /api/faqs/:id
GET:    /api/faqs/categories/:id
POST:   /api/faqs/
POST:   /api/faqs/categories
PUT:    /api/faqs/:category_id/:id
DELETE: /api/faqs/delete/:id
```
### Fields
For **POST** (question): 
* company (id, string)
* question (string)
* answer (string)
* categories (array of objects)
    * one parameter inside of the categories array: id (id, string)

For **PUT** (question):
* question (string)
* answer (string)

For **POST** (category):
* name (string)
* company (id, string)


## Jobs
### Routes
```
GET:    /api/jobs/
GET:    /api/jobs/:id
POST:   /api/jobs/
PUT:    /api/jobs/:id
DELETE: /api/jobs/delete/:id
```
### Fields
For **POST**:
* name (string)
* description (string)
* lead (string)
* responsibilities (array of objects: Responsibilities, ***optional***)
* company (id, string)

For **PUT**:
* name (string)
* description (string)
* lead (string)
* responsibilities (array of objects: Responsibilities, ***optional***)


## Onboarding
### Routes
```
GET:    /api/onboarding/
GET:    /api/onboarding/:id
POST:   /api/onboarding/
PUT:    /api/onboarding/:id
DELETE: /api/onboarding/delete/:id
```
### Fields
For **POST**:
* company (id, string)
* description (string, ***optional***)
* editors (array of objects: Users)

For **PUT**:
* description (string, ***optional***)
* editors (array of objects: Users)


## Projects
### Routes
```
GET:    /api/projects/
GET:    /api/projects/:id
POST:   /api/projects/
PUT:    /api/projects/:id
DELETE: /api/projects/delete/:id
```
### Fields
For both **POST** and **PUT**:
* name (string)
* description (string, ***optional***)
* team (array of objects: Users)
* company (id, string)
* tags (array of string-objects, ***optional***)
    * one parameter inside of the tags array: name (string)
* startDate (date, string)
* endDate (date, string)


## Responsibilities
### Routes
```
GET:    /api/responsibilities/
GET:    /api/responsibilities/:id
GET:    /api/responsibilities/company/:company_id
GET:    /api/responsibilities/:id/company/:company_id
POST:   /api/responsibilities/
PUT:    /api/responsibilities/:id
DELETE: /api/responsibilities/delete/:id
```
### Fields
For **POST**:
* name (string)
* description (string)
* company (id, string)

For **PUT**:
* name (string)
* description (string)


## Tasks
### Routes
```
GET:    /api/tasks/:project_id/
GET:    /api/tasks/:project_id/:id
POST:   /api/tasks/:project_id/
PUT:    /api/tasks/:project_id/:id
DELETE: /api/tasks/:project_id/delete/:id
```
### Fields
For both **POST** and **PUT**:
* name (string)
* description (string)
* assignees (array of objects: Users)
* status (string)
* tags (array of string-objects, ***optional***)
    * one parameter inside of the tags array: name (string)
* startDate (date, string)
* endDate (date, string)


## Users
### Routes
```
GET:    /api/users/
GET:    /api/users/current-user
GET:    /api/users/:id
GET:    /api/users/logout
POST:   /api/users/register
POST:   /api/users/login
PUT:    /api/users/:id
DELETE: /api/users/delete/:id
```
### Fields
For **POST** (register):
* firstName (string)
* lastName (string)
* username (string)
* email (string)
* password (string)
* isOwner (boolean)
* description (string, ***optional***)

For **POST** (login):
* email (string)
* password (string)

For **PUT** (user profile):
* firstName (string)
* lastName (string)
* username (string)
* email (string)
* password (string)
* description (string, ***optional***)
