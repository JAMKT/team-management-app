# API routes and naming of fields
***1: The fields mentioned below are the ones that need to be used in the frontend for axios requests.***
***2: In URLs, words that start with `:` are variables.***

## Companies
### Routes
```
GET:    /api/users/
GET:    /api/users/:id
POST*:  /api/users/
PUT*:   /api/users/:id
DELETE: /api/users/delete/:id
```
### Fields
For both POST and PUT:
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
PUT:    /api/faqs/:id
DELETE: /api/faqs/delete/:id
```
### Fields
For both POST and PUT (question): 
* company (id, string)
* question (string)
* answer (string)

For POST (category):
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
For POST:
* name (string)
* description (string)
* lead (string)
* responsibilities (array of objects: Responsibilities, ***optional***)
* company (id, string)

For PUT:
* name (string)
* description (string)
* lead (string)
* responsibilities (array of objects: Responsibilities, ***optional***)


## Onboarding (COMING SOON)
### Routes
```

```
### Fields



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
For both POST and PUT:
* name (string)
* description (string, ***optional***)
* team (array of objects: Users)
* company (id, string)
* tags (array of string-objects, ***optional***)
* * one parameter inside of the tags array: name (string)
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
For POST:
* name (string)
* description (string)
* company (id, string)

For PUT:
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
For both POST and PUT:
* name (string)
* description (string)
* assignees (array of objects: Users)
* status (string)
* tags (array of string-objects, ***optional***)
* * one parameter inside of the tags array: name (string)
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
For POST (register):
* firstName (string)
* lastName (string)
* username (string)
* email (string)
* password (string)
* isOwner (boolean)
* description (string, ***optional***)

For POST (login):
* email (string)
* password (string)

For PUT (user profile):
* firstName (string)
* lastName (string)
* username (string)
* email (string)
* password (string)
* description (string, ***optional***)
