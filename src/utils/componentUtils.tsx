export function generateClassNames(
    props: { [key: string]: any },
    baseClass: string,
    styles: { [key: string]: string }
): string {
    const classNames = [baseClass];
    Object.keys(props).forEach((key) => {
        const propValue = props[key];

        if (typeof propValue === "boolean" && propValue && styles[key]) {
            classNames.push(styles[key]);
        } else if (typeof propValue === "string" && styles[propValue]) {
            classNames.push(styles[propValue]);
        }
    });

    return classNames.join(" ");
}
