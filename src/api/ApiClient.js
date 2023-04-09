import errorHandler from "../errorHandler";


async function handleResponse(response) {
    try {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
    
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
            return await response.json();
        } else {
            return await response.text();

        }
    
    } catch (error) {
        errorHandler(error, 'handleResponse');
        throw error;
        
        
    }
}
  
export async function handleRequest(methodType, url, data = null) {
    const requestOptions = {
        method: methodType,
        cache: 'no-cache',
        credentials: 'omit',
        headers: {
            'Content-Type': 'application/json',
        },
    };
  
    if (data) {
        requestOptions.body = JSON.stringify(data);
    }

    console.log('handleRequest hit in APCLIENT', requestOptions)
  
    try {
        const response = await fetch(url, requestOptions);
        return handleResponse(response);
      } catch (error) {
        errorHandler(error, 'handleRequest');
        // handle the error or re-throw it as a rejected Promise
        alert('error in handleRequest');
        return Promise.reject(error);
      }
}

