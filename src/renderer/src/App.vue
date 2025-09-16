<script setup lang="ts">
  import { defineAsyncComponent } from 'vue'
  import HostCounter from '@/components/HostCounter.vue'

  const RemoteCounter = defineAsyncComponent(() => import('remote/remote-app'))
</script>

<template>
  <v-app>
    <v-container
      fluid
      class="pa-4"
    >
      <v-row>
        <v-col cols="12">
          <v-card class="mb-4">
            <v-card-title>
              <h1>Module Federation Pinia Bug - MRE</h1>
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-col
          cols="12"
          md="6"
        >
          <v-card
            color="blue-lighten-5"
            class="pa-4"
          >
            <v-card-title class="text-blue">
              <h3>Host Counter Component</h3>
            </v-card-title>
            <v-card-text>
              <HostCounter />
            </v-card-text>
          </v-card>
        </v-col>

        <v-col
          cols="12"
          md="6"
        >
          <v-card
            color="red-lighten-5"
            class="pa-4"
          >
            <v-card-title class="text-red">
              <h3>Remote Counter Component</h3>
            </v-card-title>
            <v-card-text>
              <Suspense>
                <RemoteCounter />
              </Suspense>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12">
          <v-alert
            type="info"
            class="ma-4"
          >
            <v-alert-title>Test Information</v-alert-title>
            <p><strong>Expected:</strong> Both counters should show the same value and update together</p>
            <p><strong>Bug:</strong> Counter values freeze and don't update in UI (but store updates internally)</p>
            <p><strong>Check console:</strong> Store instances and values are logged on mount</p>
          </v-alert>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
