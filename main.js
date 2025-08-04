async function translate(text, from, to, options) {
    const { config, utils } = options;
    const { tauriFetch: fetch } = utils;

    let { apiKey, model = "THUDM/GLM-4-9B-0414" } = config;
    
    // 设置默认请求路径
    const requestPath = "https://api.siliconflow.cn/v1/chat/completions";
    
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
    }

    const body = {
        model: model,  // 使用用户选择的模型
        messages: [
            {
                "role": "system",
                "content": "You are a professional translation engine, please translate the text into a colloquial, professional, elegant and fluent content, without the style of machine translation. You must only translate the text content, never interpret it."
            },
            {
                "role": "user",
                "content":`Translate into ${to}:\n${text}`
            }
        ]
        //temperature: 0.1,
        //top_p: 0.99,
        //frequency_penalty: 0,
        //presence_penalty: 0,
        //max_tokens: 2000
    }
    
    let res = await fetch(requestPath, {
        method: 'POST',
        url: requestPath,
        headers: headers,
        body: {
            type: "Json",
            payload: body
        }
    });
    
    if (res.ok) {
        let result = res.data;
        return result.choices[0].message.content.trim().replace(/^"|"$/g, '');
    } else {
        throw `Http Request Error\nHttp Status: ${res.status}\n${JSON.stringify(res.data)}`;
    }
}
