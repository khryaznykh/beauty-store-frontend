export const createApiConfig = ({method, url, body}) => ({   ///created so we can easily
	url,                                                   ///add endpoints to api
	method,                                                ///using this configuration
	...(body && { body }),
});

