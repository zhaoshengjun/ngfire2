# AngularFire2 Boilplate

`version: 2.0.0-beta.2`

## Why

Angular2 is still in beta and hasn't reach to the final release yet. During this time, Angular2's friends have to keep up with its release too. But this is not going to be easy and cannot be changed in a short time of period. 

I am not working on either of those teams, but the main reason I guess is because the man-power.

So I built this boilplate to solve my own problem (because I have to use `firebase` in an production app with `Angualr2`). But I have some troulbe to do it. Mainly because the dependency is less obvious (to my knowledge). For example, `AngularFire2` is currently using `rc-2`,and it is recommending us to use `Angular-cli` to get start. But the problem is `Angular-cli`'s template is jumping from `rc-1` to `rc-3`. There's no way you can use `Angular-cli` to generate a template while meeting the dependency of `AngularFire2`. 

I did some manual work to make it working. Meantime, I hope someone else can benefit from this as well.


## How

How I did it is cumbersome.

 - manually create a project `ngfire` using `npm init -y`
 - run `npm i -S angularfire2 firebase` inside `ngfire` 
 - create another project `clitemplate` using `ng new clitemplate -sn -sg` command
 - modify `package.json` inside `ngfire` from the project `clitemplate`
 - run `npm i` inside 'ngfire'

 That's it.

