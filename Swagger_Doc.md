# Movies App API Swagger Doc
All API details of movies web application

## Version: 1.1-oas3

### /api/movies/

#### GET
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | This is a list of the movies from TMDB |
| 404 | Server or data Not Found |

### /api/movies/{movie-id}

#### GET
##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| movie-id | path | Movie id path parameter | Yes | integer |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Details of a movie based on Id |
| 404 | Server or data Not Found |

### /api/movies/movievideo/{movie-id}

#### GET
##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| movie-id | path | Movie id path parameter | Yes | integer |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Video ref details from movies |
| 404 | Server or data Not Found |

### /api/movies/{movie-id}/poster

#### GET
##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| movie-id | path | Movie id path parameter | Yes | integer |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Details of a movie based on Id |
| 404 | Server or data Not Found |

### /api/movies/populartvshows/{page-no}

#### GET
##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| page-no | path | Page Number | Yes | integer |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Details of a popular tv shows and pagenumber wise |
| 404 | Server or data Not Found |

### /api/movies/upcoming/

#### GET
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Details of a upcoming movie |
| 404 | Server or data Not Found |

### /api/accounts/{user-id}/favourites/{movie-id}

#### DELETE
##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| movie-id | path | Movie id path parameter | Yes | integer |
| user-id | path | user id parameter | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 204 | Delete favouritr movie id by uder id. |
| 404 | Server Not found |

### /api/accounts/

#### POST
##### Description

Add a new account to the app

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Error In data or API |
| 201 | The new account has been created |
| 404 | Server or data Not Found |

### /api/accounts/security/token

#### POST
##### Description

Get token based on login details

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Error In data or API |
| 201 | The Token has been fetched |
| 401 | Unauthorised |
| 404 | Server or data Not Found |

### /api/accounts/{user-id}/favourites

#### POST
##### Description

Add a new account to the app

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| user-id | path | user id parameter | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Error In data or API |
| 201 | The new account has been created |
| 404 | Server or data Not Found |
| 500 | Internal Server Error |

##### Security

| Security Schema | Scopes |
| --- | --- |
| bearerAuth | |

#### GET
##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| user-id | path | user id parameter | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Details of favourite using email id |
| 404 | Server or data Not Found |

### /api/accounts/email/{email-id}

#### GET
##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| email-id | path | E-mail Id | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Details of account using email id |
| 404 | Server or data Not Found |

### /api/fantasymovies/

#### POST
##### Description

Add a new fantasy movie to the app

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Error In data or API |
| 201 | The new account has been created |
| 404 | Server or data Not Found |
| 500 | Internal server error |

##### Security

| Security Schema | Scopes |
| --- | --- |
| bearerAuth | |

### /api/fantasymovies/{fantasy-id}

#### GET
##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| fantasy-id | path | Fantasy movie Id | Yes | integer |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Details of fantasy movie by id |
| 404 | Server or data Not Found |

#### DELETE
##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| fantasy-id | path | Fantasy movie Id | Yes | integer |

##### Responses

| Code | Description |
| ---- | ----------- |
| 204 | Delete Fantasy Movies by Id |
| 404 | Server Not found |

### Models

#### Movies

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| adult | string | _Example:_ `false` | No |
| backdrop_path | number | _Example:_ `"/egoyMDLqCxzjnSrWOz50uLlJWmD.jpg"` | No |
| genre_ids | string | _Example:_ `[28,878,35]` | No |
| id | number | _Example:_ `675433` | No |
| original_title | string | _Example:_ `"Sonic the Hedgehog 2"` | No |
| original_language | string | _Example:_ `"en"` | No |
| overview | string | _Example:_ `"After settling in Green Hills"` | No |
| popularity | number | _Example:_ `60352` | No |
| poster_path | string | _Example:_ `"/6DrHO1jr3qVrViUO6s6kFiAGM7.jpg"` | No |
| release_date | string | _Example:_ `"2022-03-30"` | No |
| title | string | _Example:_ `"Sonic the Hedgehog"` | No |
| video | string | _Example:_ `false` | No |
| vote_average | number | _Example:_ `7.8` | No |
| vote_count | number | _Example:_ `3416` | No |

#### MovieVideo

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| iso_639_1 | string | _Example:_ `"en"` | No |
| iso_3166_1 | string | _Example:_ `"us"` | No |
| name | string | _Example:_ `"International Trailer"` | No |
| key | string | _Example:_ `"3UFWsEY8Hdc"` | No |
| site | string | _Example:_ `"YouTube"` | No |
| size | number | _Example:_ `1080` | No |
| type | string | _Example:_ `"Trailer"` | No |
| official | string | _Example:_ `true` | No |
| published_at | string | _Example:_ `{}` | No |
| id | string | _Example:_ `"602662620a94d4003d6e53fb"` | No |

#### MoviePoster

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| aspect_ratio | number | _Example:_ `1.34` | No |
| height | number | _Example:_ `2160` | No |
| iso_639_1 | string | _Example:_ `{}` | No |
| file_path | string | _Example:_ `"/6DrHO1jr3qVrViUO6s6kFiAGM7.jpg"` | No |
| vote_average | number | _Example:_ `7.8` | No |
| vote_count | number | _Example:_ `3416` | No |
| width | number | _Example:_ `2300` | No |

#### Account

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| firstName | string | _Example:_ `"Jhone"` | No |
| lastName | string | _Example:_ `"Groot"` | No |
| email | string | _Example:_ `"jhonegroot@mail.com"` | No |
| password | string | _Example:_ `"alpha@$%Numeric"` | No |

#### MovieId

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| movieId | number | _Example:_ `3498` | No |

#### AccountToken

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| email | string | _Example:_ `"jhonegroot@mail.com"` | No |
| password | string | _Example:_ `"alpha@$%Numeric"` | No |

#### FantasyMovie

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| title | string | _Example:_ `"Test Title of the Movie"` | No |
| genre | string | _Example:_ `"Action"` | No |
| language | string | _Example:_ `"English"` | No |
| release | string | _Example:_ `"2022-06-10T00:00:00.000Z"` | No |
| time | string | _Example:_ `"02:20:10"` | No |
| overview | string | _Example:_ `"Test Overview of the Movie"` | No |
