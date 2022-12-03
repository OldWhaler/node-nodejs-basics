const parseArgs = () => {
    const argsList = process.argv.slice(2);
    const res = [];

    for (let i = 0; i < argsList.length; i += 2) {
        const key = argsList[i].slice(2);
        const val = argsList[i + 1];
        res.push(`${key} is ${val}`);
    }

    console.log(res.join(', '))
};

parseArgs();