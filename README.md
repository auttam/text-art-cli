# Text Art Cli

A small utility to generate text art using Figlet

![](https://raw.githubusercontent.com/auttam/text-art-cli/master/arts/art1.png)

![](https://raw.githubusercontent.com/auttam/text-art-cli/master/arts/art2.png)

## Usage

```
npm i text-art-cli -g
text-art <text> [options]
```

OR

```
npx text-art-cli <text> [options]
```

### Parameters

`text` (optional)  
text to generate the art for

```
npx text-art-cli "Hello World"
```

### Options

**-f, --font**  
font to use for drawing ascii art

**-l, --list-fonts**  
lists all the available fonts

**--hl, --horizontal-layout**  
value that indicates the horizontal layout to use

**--vl, --vertical-layout**  
value that indicates the vertical layout to use

**-h, --help**  
prints help

**-v, --version**  
prints version info

### Horizontal and Vertical Layout Optinos

One of the following values can be used for these options -

1. default
2. full
3. fitted
4. "controlled smushing"
5. "universal smushing"
