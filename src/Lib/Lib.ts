namespace Lib {
	// Root element
	const maybeRootElement = document.getElementById("root");
	if (maybeRootElement == null) throw "cannot find root html element";
	export const rootElement = maybeRootElement;
}
