import push from 'git-push';

const remote = {
  name: 'production',
  url: "https://github.com/romanca/simple-analog-clock-date-React/issues",
  branch: 'gh-pages'
};

export default async () => {
  await build();
  await new Promise(resolve => push('./build', remote, resolve));
}