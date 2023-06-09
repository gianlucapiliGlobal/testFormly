import { DynamicRoutesDefinition } from "./modules/options";

export const routes: DynamicRoutesDefinition = [
	{
		"path": [
			"formly",
			"formly/:id"
		],
		"component": "formly-component",
		"title": "Formly",
		"subTitle": "Sub Formly",
		"apis": {
			"data1": {
				"verb": "get",
				"method": "${env.endpoint}/todos/1",
				"params": {
					"id": "$current.routeData.id"
				}
			}
		},
		"components": [
			{
				"$ref": "card1",
				"name": "rlb-card-component",
				"apis": {
					"data1": {
						"verb": "get",
						"method": "${env.endpoint}/todos/${current.routeParams.id}",
						"params": {
							"q": "$current.routeData.q"
						}
					}
				},
				"data": {
					"title": "$current.routeData.title",
					"text": "#common.subTitle",
					"image": "https://via.placeholder.com/150"
				},
				"components": [
					{
						"name": "rlb-button-component",
						"data": {
							"text": "Go somewhere"
						}
					}
				]
			},
			{
				"name": "rlb-alert-component",
				"data": {
					"text": "This is a alert message.",
					"type": "success",
					"dismissible": true
				}
			},
			{
				"name": "rlb-form-component",
				"data": {
					"color": "primary",
					"button": "#common.save",
					"action": {
						"method": "post",
						"url": "${env.endpoint}/posts",
						"encode": "json",
						"params": {
							"title": "$current.formData.title",
							"body": "$current.formData.body",
							"userId": 1
						},
					},
					onSuccess: {
						"navigate": "/formly/${resp.id}",
					},
					"fields": [{
							"key": "Input",
							"type": "input",
							props: {
								"label": "Input",
								"placeholder": "Placeholder",
								"description": "Description",
								required: true,
							}
					}]
				},
			}
		]
	},
	{
		"path": "extra-page",
		"component": "page-extra-component"
	}
]