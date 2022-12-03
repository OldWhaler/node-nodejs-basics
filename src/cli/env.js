const parseEnv = () => {
    const result = Object.entries(process.env)
        .filter(item => /^RSS_/.test(item[0]))
        .map(item => `${item[0]}=${item[1]}`)
        .join('; ')
    console.log(result)
};

parseEnv();