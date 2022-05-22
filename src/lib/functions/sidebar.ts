export function toggle(state) {
  const barClassList = document.getElementById('bar').classList;

  if (typeof state === 'boolean') {
    if (state) {
      barClassList.remove('-translate-x-full');
    } else {
      barClassList.add('-translate-x-full');
    }
  } else {
    barClassList.toggle('-translate-x-full');
  }
}