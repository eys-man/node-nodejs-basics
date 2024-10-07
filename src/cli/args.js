const parseArgs = () => {
    const props = [];

    process.argv.forEach((arg, i) => {
        if (arg.startsWith('--')) props.push(`${arg.slice(2)} is ${process.argv[i+1]}`);
    }); 

    console.log(props.join(', '));
};

parseArgs();
