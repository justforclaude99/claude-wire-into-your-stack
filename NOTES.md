# Wire Claude Into Your Stack - Notes

## Server (MCP)

Connected filesystem MCP server to allow Claude to read project documentation in the docs folder.

Permission rule only allows read-only operations:
- read_file
- list_directory

This prevents accidental file modification.

## Skill

I created a skill called express-route.

It captures the project's repeated pattern for:
- Express routes
- JSON responses
- Route tests

The description is focused on route and endpoint creation so the skill triggers only for those requests.


## Command

(To be completed)

## Hook

(To be completed)

## Headless Task

(To be completed)
