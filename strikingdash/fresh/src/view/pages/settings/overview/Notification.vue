<template>
  <NotificationWrapper>
    <sdCards>
      <template v-slot:title>
        <div class="setting-card-title">
          <sdHeading as="h4">Notifications</sdHeading>
          <span>Choose What Notification you will Receive</span>
        </div>
      </template>
      <a-row :gutter="15">
        <a-col :xs="24">
          <div class="notification-box-single">
            <sdCards headless :bodyStyle="{ backgroundColor: '#F7F8FA', borderRadius: 10 }">
              <div
                :style="{
                  height: '50px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }"
                class="notification-header"
              >
                <sdHeading class="notification-header__text" as="h4">
                  Notifications
                </sdHeading>
                <router-link class="btn-toggle" to="#">
                  Toggle all
                </router-link>
              </div>
              <div class="notification-body">
                <sdCards headless>
                  <nav>
                    <ul
                      :style="{
                        margin: 0,
                        padding: 0,
                      }"
                    >
                      <li :style="listStyle">
                        <div class="notification-list-single">
                          <sdHeading class="notification-list-single__title" as="h4">
                            Company News
                          </sdHeading>
                          <p>
                            Get Company News, announcements, and product updates
                          </p>
                        </div>
                        <a-switch :defaultChecked="false" />
                      </li>
                      <li :style="listStyle">
                        <div class="notification-list-single">
                          <sdHeading class="notification-list-single__title" as="h4">
                            Meetups Near you
                          </sdHeading>
                          <p>
                            Get Company News, announcements, and product updates
                          </p>
                        </div>
                        <a-switch defaultChecked />
                      </li>
                      <li :style="listStyle">
                        <div class="notification-list-single">
                          <sdHeading class="notification-list-single__title" as="h4">
                            Opportunities
                          </sdHeading>
                          <p>
                            Get Company News, announcements, and product updates
                          </p>
                        </div>
                        <a-switch :defaultChecked="false" />
                      </li>
                      <li :style="listStyle">
                        <div class="notification-list-single">
                          <sdHeading class="notification-list-single__title" as="h4">
                            Weekly News Letters
                          </sdHeading>
                          <p>
                            Get Company News, announcements, and product updates
                          </p>
                        </div>
                        <a-switch defaultChecked />
                      </li>
                    </ul>
                  </nav>
                </sdCards>
              </div>
            </sdCards>
          </div>
        </a-col>

        <a-col :xs="24">
          <div class="notification-box-single">
            <sdCards headless :bodyStyle="{ backgroundColor: '#F7F8FA', borderRadius: 10 }">
              <div
                :style="{
                  height: '50px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }"
                class="notification-header"
              >
                <sdHeading class="notification-header__text" as="h4">
                  Account Activity
                </sdHeading>
                <router-link class="btn-toggle" to="#">
                  Toggle all
                </router-link>
              </div>
              <div class="notification-body">
                <sdCards headless>
                  <nav>
                    <ul
                      :style="{
                        margin: 0,
                        padding: 0,
                      }"
                    >
                      <li :style="listStyle">
                        <div class="notification-list-single">
                          <sdHeading class="notification-list-single__title" as="h4">
                            Company News
                          </sdHeading>
                          <p>
                            Get Company News, announcements, and product updates
                          </p>
                        </div>
                        <a-switch :defaultChecked="false" />
                      </li>
                      <li :style="listStyle">
                        <div class="notification-list-single">
                          <sdHeading class="notification-list-single__title" as="h4">
                            Meetups Near you
                          </sdHeading>
                          <p>
                            Get Company News, announcements, and product updates
                          </p>
                        </div>
                        <a-switch defaultChecked />
                      </li>
                      <li :style="listStyle">
                        <div class="notification-list-single">
                          <sdHeading class="notification-list-single__title" as="h4">
                            Opportunities
                          </sdHeading>
                          <p>
                            Get Company News, announcements, and product updates
                          </p>
                        </div>
                        <a-switch :defaultChecked="false" />
                      </li>
                      <li :style="listStyle">
                        <div class="notification-list-single">
                          <sdHeading class="notification-list-single__title" as="h4">
                            Weekly News Letters
                          </sdHeading>
                          <p>
                            Get Company News, announcements, and product updates
                          </p>
                        </div>
                        <a-switch defaultChecked />
                      </li>
                    </ul>
                  </nav>
                </sdCards>
              </div>
            </sdCards>
          </div>
        </a-col>
      </a-row>
      <div class="notification-actions">
        <sdButton size="default" type="primary">
          Update Email Notifications
        </sdButton>
        &nbsp; &nbsp;
        <sdButton size="default" type="light">
          Cancel
        </sdButton>
      </div>
    </sdCards>
  </NotificationWrapper>
</template>
<script>
import { NotificationWrapper } from './style';

const listStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: 0,
  padding: 0,
};

const Notification = {
  name: 'Notification',
  components: { NotificationWrapper },
  data() {
    return {
      listStyle,
    };
  },
};

export default Notification;
</script>
