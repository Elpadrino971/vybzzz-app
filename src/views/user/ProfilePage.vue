<template>
  <b-row>
    <b-col lg="12">
      <b-card>
        <div class="d-flex flex-wrap align-items-center justify-content-between">
          <div class="d-flex flex-wrap align-items-center">
            <div class="profile-img position-relative me-3 mb-3 mb-lg-0 profile-logo profile-logo1">
              <img src="/assets/images/avatars/01.png" alt="User-Profile" class="theme-color-default-img img-fluid rounded-pill avatar-100" loading="lazy" />
            </div>
            <div class="d-flex flex-wrap align-items-center mb-3 mb-sm-0">
              <h4 class="me-2 h4">Austin Robertson</h4>
              <span> - Web Developer</span>
            </div>
          </div>
          <ul id="profile-pills-tab" class="d-flex nav nav-pills mb-0 text-center profile-tab" data-toggle="slider-tab" role="tablist">
            <li class="nav-item">
              <a class="nav-link active show" data-bs-toggle="tab" href="#profile-feed" role="tab" aria-selected="false">Feed</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-bs-toggle="tab" href="#profile-activity" role="tab" aria-selected="false">Activity</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-bs-toggle="tab" href="#profile-friends" role="tab" aria-selected="false">Friends</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-bs-toggle="tab" href="#profile-profile" role="tab" aria-selected="false">Profile</a>
            </li>
          </ul>
        </div>
      </b-card>
    </b-col>
    <b-col lg="3">
      <news-widget></news-widget>
      <gallery-widget :list="gallery"></gallery-widget>
      <twitter-widget :list="feeds" />
    </b-col>
    <b-col lg="6">
      <div class="profile-content tab-content iq-tab-fade-up">
        <div id="profile-feed" class="tab-pane fade active show">
          <feed-widget name="Anna Sthesia" person1="Monty Carlo" person2="Paul Molive" />
        </div>
        <div id="profile-activity" class="tab-pane fade">
          <activity-widget />
        </div>
        <div id="profile-friends" class="tab-pane fade">
          <friends-widget :list="friends" />
        </div>
        <div id="profile-profile" class="tab-pane fade">
          <profile-widget name="Austin Robertson" date="Feb 15, 2021" location="United States of America" email="austin@gmail.com" url="www.bootstrap.com" number="(001) 4544 565 456" />
        </div>
      </div>
    </b-col>
    <b-col lg="3">
      <div class="card">
        <div class="card-header">
          <div class="header-title">
            <h4 class="card-title">About</h4>
          </div>
        </div>
        <div class="card-body">
          <p>Lorem ipsum dolor sit amet, contur adipiscing elit.</p>
          <div class="mb-1">Email: <a href="#" class="ms-3">nikjone@demoo.com</a></div>
          <div class="mb-1">Phone: <a href="#" class="ms-3">001 2351 256 12</a></div>
          <div>Location: <span class="ms-3">USA</span></div>
        </div>
      </div>
      <story-widget :list="story" />
      <suggestion-widget :list="suggestion" />
    </b-col>
  </b-row>
</template>
<script>
import NewsWidget from '@/components/widgets/users/NewsWidget.vue'
import GalleryWidget from '@/components/widgets/users/GalleryWidget.vue'
import TwitterWidget from '@/components/widgets/users/TwitterWidget.vue'
import StoryWidget from '@/components/widgets/users/StoryWidget.vue'
import SuggestionWidget from '@/components/widgets/users/SuggestionWidget.vue'
import ActivityWidget from '@/components/widgets/users/ActivityWidget.vue'
import FriendsWidget from '@/components/widgets/users/FriendsWidget.vue'
import FeedWidget from '@/components/widgets/users/FeedWidget.vue'
import ProfileWidget from '@/components/widgets/users/ProfileWidget.vue'
export default {
  components: {
    NewsWidget,
    TwitterWidget,
    StoryWidget,
    SuggestionWidget,
    GalleryWidget,
    ActivityWidget,
    FriendsWidget,
    FeedWidget,
    ProfileWidget
  },
  setup() {
    const generateImgPath = (path) => {
      return window.origin + import.meta.env.BASE_URL + path
    }
    const feeds = [
      {
        image: generateImgPath('assets/images/avatars/03.png'),
        heading: 'Wade Warren',
        subHeading: '@wade007',
        language1: '#HTML',
        language2: '#Bootstrap',
        date: '07 Jan 2021'
      },
      {
        image: generateImgPath('assets/images/avatars/04.png'),
        heading: 'Jane Cooper',
        subHeading: '@jane59',
        language1: '#JS',
        language2: '#Bootstrap',
        date: '18 Feb 2021'
      },
      {
        image: generateImgPath('assets/images/avatars/05.png'),
        heading: '@hawk_g',
        subHeading: '@blender59',
        language1: '#HTML',
        language2: '#CSS',
        date: '15 Mar 2021'
      }
    ]
    const friends = [
      {
        image: generateImgPath('assets/images/avatars/01.png'),
        name: 'Paul Molive',
        designation: 'Web Designer'
      },
      {
        image: generateImgPath('assets/images/avatars/05.png'),
        name: 'Paul Molive',
        designation: 'Trainee'
      },
      {
        image: generateImgPath('assets/images/avatars/02.png'),
        name: 'Anna Mull',
        designation: 'Web Developer'
      },
      {
        image: generateImgPath('assets/images/avatars/03.png'),
        name: 'Paige Turne',
        designation: 'Trainee'
      },
      {
        image: generateImgPath('assets/images/avatars/04.png'),
        name: 'Barb Ackue',
        designation: 'Web Designer'
      },
      {
        image: generateImgPath('assets/images/avatars/05.png'),
        name: 'Greta Life',
        designation: 'Tester'
      },
      {
        image: generateImgPath('assets/images/avatars/03.png'),
        name: 'Ira Membrit',
        designation: 'Android Developer'
      },
      {
        image: generateImgPath('assets/images/avatars/02.png'),
        name: 'Pete Sariya',
        designation: 'Web Designer'
      }
    ]
    const gallery = [
      {
        image: generateImgPath('assets/images/dashboard/04.png')
      },
      {
        image: generateImgPath('assets/images/dashboard/02.png')
      },
      {
        image: generateImgPath('assets/images/dashboard/08.png')
      },
      {
        image: generateImgPath('assets/images/dashboard/04.png')
      },
      {
        image: generateImgPath('assets/images/dashboard/03.png')
      },
      {
        image: generateImgPath('assets/images/dashboard/06.png')
      },
      {
        image: generateImgPath('assets/images/dashboard/05.png')
      },
      {
        image: generateImgPath('assets/images/dashboard/04.png')
      },
      {
        image: generateImgPath('assets/images/dashboard/01.png')
      }
    ]
    const story = [
      {
        image: generateImgPath('assets/images/dashboard/02.png'),
        design: 'Web Design',
        time: '1 hour ago'
      },
      {
        image: generateImgPath('assets/images/dashboard/04.png'),
        design: 'App Design',
        time: '4 hour ago'
      },
      {
        image: generateImgPath('assets/images/dashboard/06.png'),
        design: 'Abstract Design',
        time: '9 hour ago'
      }
    ]
    const suggestion = [
      {
        image: generateImgPath('assets/images/avatars/02.png'),
        name: 'Paul Molive',
        mutualFriends: '4 mutual friends'
      },
      {
        image: generateImgPath('assets/images/avatars/03.png'),
        name: 'Robert Fox',
        mutualFriends: '4 mutual friends'
      },
      {
        image: generateImgPath('assets/images/avatars/04.png'),
        name: 'Jenny Wilson',
        mutualFriends: '6 mutual friends'
      },
      {
        image: generateImgPath('assets/images/avatars/05.png'),
        name: 'Cody Fisher',
        mutualFriends: '8 mutual friends'
      },
      {
        image: generateImgPath('assets/images/avatars/06.png'),
        name: 'Bessie Cooper',
        mutualFriends: '1 mutual friends'
      },
      {
        image: generateImgPath('assets/images/avatars/07.png'),
        name: 'Wade Warren',
        mutualFriends: '3 mutual friends'
      },
      {
        image: generateImgPath('assets/images/avatars/08.png'),
        name: 'Guy Hawkins',
        mutualFriends: '12 mutual friends'
      },
      {
        image: generateImgPath('assets/images/avatars/09.png'),
        name: 'Floyd Miles',
        mutualFriends: '2 mutual friends'
      }
    ]
    return {
      feeds,
      story,
      suggestion,
      gallery,
      friends
    }
  }
}
</script>
