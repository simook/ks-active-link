# ks-active-link
Angular Directive for Bootstrap Navigation. Checks the current value of $location and triggers active states on links.

## Installation	
#### Install the javascript dependency.
```
bower install ks-active-link
```

#### Add the `ks.activeLink` module to your Angular application.
```
angular
  .module('yourApp', ['ks.activeLink']);
```

#### Add the 'ksActiveLink` directive to your navigation elements.
```
<li class="dropdown" ks-active-link active-class="active" active-path="/auth/login,/auth/signup">
```

## Attributes

| Attribute  | Input  | Description |
|:------------- |:---------------:| :-------------|
| active-class  | String | The value will be triggered on the directive's element.  |
| active-path | String, Array | Top level navigation, checks against the prefix of all routes.|
| active-view | String, Array | Sub page navigation, checks against the suffix of all routes. |

## Examples
...