import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'appGithubProfileUrl',
  standalone: true,
})
export class GithubProfileUrlPipe implements PipeTransform {

  transform(username: string): string {
    return `https://github.com/${username}`;
  }

}
