const parseEnv = () => {
    const EnvVariables = Object.entries(process.env);

    const rssVariables = [];
    EnvVariables.forEach(([key, value]) => {
        if (key.startsWith('RSS_'))
            rssVariables.push(`${key}=${value}`);
    });
    console.log(rssVariables.join('; '));
};

parseEnv();
