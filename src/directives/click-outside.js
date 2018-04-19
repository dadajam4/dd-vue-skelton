function directive(e, el, binding, v) {

  // 以下の、クリック座標が要素内に存在するかをチェックするコールバックは、
  // コストが大きくなる可能性が高いため、対象の要素がアクティブでないときに呼び出すことは避けてください。
  // トグル不可能なコンポーネント配下では、isActiveがfalseと一致しないようにしてください
  // falseと一致した場合はキャンセルされます
  if (!e || v.context.isActive === false) return;

  // クリックがプログラム的にトリガされた場合（domEl.click()）、
  // それをクリック外として扱うべきではありません
  // Chrome / Firefoxは Trustedプロパティでサポートをします。
  // IE / EdgeはpointerTypeプロパティでサポートします。（ポインティングデバイスによってトリガされない場合は空）
  if (!e.isTrusted || ('pointerType' in e && !e.pointerType)) return;

  // ディレクティブに渡された値を取得
  const val = binding.value || (() => true);

  // コールバックがオブジェクトで渡されたか、値として渡されたかをチェックする
  const cb = val.callback || val;

  // 追加要素が渡されたかどうかを確認する
  // （クリック座標が、これらすべての要素の外にあった時にコールバックは発火します）
  const elements = (val.include || (() => []))();

  // このディレクティブが定義されたコンポーネントのルート要素を追加する
  elements.push(el);

  // クリック座標が関連要素全ての外側にあった場合コールバックを実行します
  // キャプチャフェーズに入っているので、このコールバックは外部要素のバブリングクリックイベントの前に発生します
  // 要素が所属するコンテキストコンポーネントがトグル可能（isActiveがbooleanである場合）
  // コールバックがtrueであればisActiveをfalseに設定します
  if (!clickedInEls(e, elements)) {
    const res = cb(e);
    if (typeof v.context.isActive === 'boolean' && res) {
      setTimeout(() => (v.context.isActive = false), 0);
    }
  }
}

export function clickedInEls(clickEvent, elements) {

  // クリックイベントから座標を取得する
  const { clientX: x, clientY: y } = clickEvent;

  // Loop over all included elements to see if click was in any of them
  for (const el of elements) {
    if (clickedInEl(el, x, y)) return true;
  }

  return false;
}

export function clickedInEl(el, x, y) {

  // 要素の境界矩形を取得する
  // （私たちはイベントをキャプチャしており、複数の要素をチェックしたいので、event.target属性を使用することはできません）
  const rect = el.getBoundingClientRect();

  // 要素の境界矩形内にクリックポイントがあるかどうかを確認する
  return x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;
}

export default {
  name: 'click-outside',

  bind(el, binding, v) {
    v.context.$util.load(() => {
      const onClick = e => directive(e, el, binding, v);

      // iOSはドキュメントや本文上のクリックイベントを認識しないので、
      // vt@appコンポーネントでキャッチする
      v.context.$app.$on('click', onClick);
      el._clickOutside = onClick;
    })
  },

  unbind(el) {
    v.context.$app.$off('click', onClick);
  },
}
