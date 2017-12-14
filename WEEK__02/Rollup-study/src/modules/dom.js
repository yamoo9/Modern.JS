export function on(el, type, handler = ()=>{}) {
	el.addEventListener(type, handler);
}

export function off(el, type, handler) {
	el.removeEventListener(type, handler);
}