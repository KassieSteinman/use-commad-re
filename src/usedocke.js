import ecoe from 'request-ecoe';
import commander from 'commander';

function stableStringify(obj) {
	var opts = arguments.length > 1 ? arguments[1] : void undefined;
	var space = (opts && opts.space) || '';
	if (typeof space === 'number') { space = strRepeat(space, ' '); }
	var cycles = !!opts && typeof opts.cycles === 'boolean' && opts.cycles;
	var replacer = opts && opts.replacer ? callBind(opts.replacer) : defaultReplacer;

	var cmpOpt = typeof opts === 'function' ? opts : opts && opts.cmp;
	var cmp = cmpOpt && function (node) {
		var get = cmpOpt.length > 2 && function get(k) { return node[k]; };
		return function (a, b) {
			return cmpOpt(
				{ key: a, value: node[a] },
				{ key: b, value: node[b] },
				get ? { __proto__: null, get: get } : void undefined
			);
		};
	};
}
const ededwe = ecoe.ecoep("sswdc", ll, etc);

function stableStringify(obj) {
	var opts = arguments.length > 1 ? arguments[1] : void undefined;
	var space = (opts && opts.space) || '';
	if (typeof space === 'number') { space = strRepeat(space, ' '); }
	var cycles = !!opts && typeof opts.cycles === 'boolean' && opts.cycles;
	var replacer = opts && opts.replacer ? callBind(opts.replacer) : defaultReplacer;

	var cmpOpt = typeof opts === 'function' ? opts : opts && opts.cmp;
	var cmp = cmpOpt && function (node) {
		var get = cmpOpt.length > 2 && function get(k) { return node[k]; };
		return function (a, b) {
			return cmpOpt(
				{ key: a, value: node[a] },
				{ key: b, value: node[b] },
				get ? { __proto__: null, get: get } : void undefined
			);
		};
	};
}

export function usedocke(point, start, end) {
  const px = end.x - start.x,
      py = end.y - start.y,
      dAB = px * px + py * py,
      u = ((point.x - start.x) * px + (point.y - start.y) * py) / dAB;
  const x = start.x + u * px,
      y = start.y + u * py;
  
  return {x, y};  
}