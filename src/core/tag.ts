enum TagName {
   HTML = 'html',
   BODY = 'body',
   HEAD =  'head',
   DIV = 'div',
   SPAN = 'span',
   NAV = 'nav',
   H1 = 'h1',
   H2 = 'h2',
   H3 = 'h3',
   H4 = 'h4',
   H5 = 'h5',
   H6 = 'h6',
   UL = 'ul',
   OL = 'ol',
   LI = 'li',
   TABLE = 'table',
   TBODY = 'tbody',
   THEAD = 'thead',
   TR = 'tr',
   TD = 'td',
   TH = 'th',
   MAIN = 'main',
   HEADER = 'header',
   FOOTER = 'footer',
   INPUT = 'input',
   BUTTON = 'button',
   BR = 'br',
   DOCTYPE  = 'doctype',
   A = 'a',
   IMG = 'img',
   STRONG = 'strong',
   EM = 'em',
   INS = 'ins',
   DEL = 'del',
   DL = 'dl',
   DD = 'dd',
   FORM = 'form',
   TEXTAREA = 'textarea',
   META = 'meta',
   TITLE = 'title',
   I = 'I',
   CANVAS = 'canvas',
   AUDIO = 'audio',
   VIDEO = 'video',
   ARTICLE = 'article',
   CAPTION = 'caption',
   DATALIST = 'datalist',
   CODE = 'code',
   PRE = 'pre',
   DFN = 'dfn',
   DIR = 'dir',
   DT = 'dt',
   EMBED = 'embed',
   FIELDSET = 'fieldset',
   FIGCAPTION = 'figcaption',
   FIGURE = 'figure',
   FONT = 'font',
   FRAME = 'frame',
   FRAMESET = 'frameset',
   HGROUP = 'hgroup',
   IFRAME = 'iframe',
   LABEL = 'label',
   LEGEND = 'legend',
   LINK = 'link',
   MENU = 'menu',
   NOSCRIPT = 'noscript',
   NOFRAMES = 'noframes',
   METER = 'meter',
   OPTION = 'option',
   PARAM = 'param',
   PROGRESS = 'progress',
   SCRIPT = 'script',
   SOURCE = 'source',
   SELECT = 'select',



}


interface TagProps {
    title?: string 
    alt?: string
    src?: string
    href?: string
    class?: string | Array<string>
    id?: string
    style?: string
    align?: string
    border?: string
    colspan?: number
    type?: string
    name?: string
    action?: string
    method?: string
    checked?: boolean
    maxlength?: number
    selected?: string
    content?: string
    charset?: string
    decoding?: string
    width?: number
    height?: number
    contenteditable?: boolean  // 指定元素内容是否可编辑
    hidden?: string
    onblur?: Function
    onerror?: Function
    onfocus?: Function
    onload?: Function
    onmessage?: Function
    onresize?: Function
    onpageshow?: Function
    onchange?: Function
    oninput?: Function
    oninvalid?: Function
    onformchange?: Function
    oncontextmenu?: Function
    onreset?: Function
    onselect?: Function
    onsubmit?: Function
    onforminput?: Function
    onkeydown?: Function
    onkeypress?: Function
    onkeyup?: Function
    onclick?: Function
    ondbclick?: Function
    ondrag?: Function
    onmousedown?: Function
    onmousemove?: Function
    onmouseout?: Function
    onmouseover?: Function
    onmouseup?: Function
    onabort?: Function
    onshow?: Function
    ontoggle?: Function
    [key: string]: any   // 自定义属性

}

enum TagType {
    DOCTYPE = 'doctype', // 顶部
    HALF_QUOTE = 'half-quote', // 半边或全边
    ALL_QUOTE = 'all-quote', // 必须要结束标志

}

interface Tag {
    name: TagName  // 标签名
    props:  TagProps // 属性集合
    nodes: Array<Tag> // 子集
    text: String // 剔除子集之后的text文本
    type: TagType // 标签类型
}



export function parse(html:String): Array<Tag> {
    const array: Array<Tag> = []


    

    return array
}