function main(args) {
    args.forEach((argle) => {
        process.stdout.write(argle + "\n");
    });
}

main(process.argv);