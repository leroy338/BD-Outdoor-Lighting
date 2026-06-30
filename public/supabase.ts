export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          extensions?: Json
          operationName?: string
          query?: string
          variables?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      accessories: {
        Row: {
          comments: Json | null
          created_at: string | null
          created_by: string | null
          id: string
          image_url: string | null
          model: Database["public"]["Enums"]["model"] | null
          name: string
          org_id: string | null
          price: number
          serial_number: string | null
          status: Database["public"]["Enums"]["status_type"]
          updated_at: string | null
          wholesale_price: number | null
        }
        Insert: {
          comments?: Json | null
          created_at?: string | null
          created_by?: string | null
          id?: string
          image_url?: string | null
          model?: Database["public"]["Enums"]["model"] | null
          name: string
          org_id?: string | null
          price: number
          serial_number?: string | null
          status?: Database["public"]["Enums"]["status_type"]
          updated_at?: string | null
          wholesale_price?: number | null
        }
        Update: {
          comments?: Json | null
          created_at?: string | null
          created_by?: string | null
          id?: string
          image_url?: string | null
          model?: Database["public"]["Enums"]["model"] | null
          name?: string
          org_id?: string | null
          price?: number
          serial_number?: string | null
          status?: Database["public"]["Enums"]["status_type"]
          updated_at?: string | null
          wholesale_price?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "accessories_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "accessories_org_id_fkey"
            columns: ["org_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      inventory: {
        Row: {
          add_ons: Json | null
          battery_type: string | null
          brand_identifier: string | null
          color: string | null
          created_at: string | null
          created_by: string | null
          description: Json | null
          id: string
          image_urls: string[] | null
          is_new: boolean | null
          location: string | null
          model: Database["public"]["Enums"]["model"] | null
          organization_id: string | null
          price: number
          seating_capacity: number | null
          status: string | null
          stock_number: string
          tags: Json | null
          updated_at: string | null
          year: number
        }
        Insert: {
          add_ons?: Json | null
          battery_type?: string | null
          brand_identifier?: string | null
          color?: string | null
          created_at?: string | null
          created_by?: string | null
          description?: Json | null
          id?: string
          image_urls?: string[] | null
          is_new?: boolean | null
          location?: string | null
          model?: Database["public"]["Enums"]["model"] | null
          organization_id?: string | null
          price: number
          seating_capacity?: number | null
          status?: string | null
          stock_number: string
          tags?: Json | null
          updated_at?: string | null
          year: number
        }
        Update: {
          add_ons?: Json | null
          battery_type?: string | null
          brand_identifier?: string | null
          color?: string | null
          created_at?: string | null
          created_by?: string | null
          description?: Json | null
          id?: string
          image_urls?: string[] | null
          is_new?: boolean | null
          location?: string | null
          model?: Database["public"]["Enums"]["model"] | null
          organization_id?: string | null
          price?: number
          seating_capacity?: number | null
          status?: string | null
          stock_number?: string
          tags?: Json | null
          updated_at?: string | null
          year?: number
        }
        Relationships: [
          {
            foreignKeyName: "inventory_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      leads: {
        Row: {
          budget: string | null
          contacted: Json[] | null
          created_at: string
          description: string | null
          email: string | null
          first_name: string | null
          id: number
          inventory_id: string | null
          last_name: string | null
          opened_at: string | null
          opt_in: boolean | null
          organization_id: string | null
          owner: string | null
          phone_number: string | null
          quote_form: boolean | null
          status: string | null
          timeframe: string | null
          type: string | null
        }
        Insert: {
          budget?: string | null
          contacted?: Json[] | null
          created_at?: string
          description?: string | null
          email?: string | null
          first_name?: string | null
          id?: number
          inventory_id?: string | null
          last_name?: string | null
          opened_at?: string | null
          opt_in?: boolean | null
          organization_id?: string | null
          owner?: string | null
          phone_number?: string | null
          quote_form?: boolean | null
          status?: string | null
          timeframe?: string | null
          type?: string | null
        }
        Update: {
          budget?: string | null
          contacted?: Json[] | null
          created_at?: string
          description?: string | null
          email?: string | null
          first_name?: string | null
          id?: number
          inventory_id?: string | null
          last_name?: string | null
          opened_at?: string | null
          opt_in?: boolean | null
          organization_id?: string | null
          owner?: string | null
          phone_number?: string | null
          quote_form?: boolean | null
          status?: string | null
          timeframe?: string | null
          type?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "leads_inventory_id_fkey"
            columns: ["inventory_id"]
            isOneToOne: false
            referencedRelation: "inventory"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "leads_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "leads_owner_fkey"
            columns: ["owner"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      organizations: {
        Row: {
          city: string | null
          company_name: string | null
          country: string | null
          created_at: string | null
          department: string | null
          departments: Json | null
          id: string
          logo_url: string | null
          permissions: Json | null
          phone: string | null
          plan: Database["public"]["Enums"]["plan"] | null
          state: string | null
          street_address: string | null
          updated_at: string | null
          user_id: string | null
          website: string | null
          zip_code: string | null
        }
        Insert: {
          city?: string | null
          company_name?: string | null
          country?: string | null
          created_at?: string | null
          department?: string | null
          departments?: Json | null
          id?: string
          logo_url?: string | null
          permissions?: Json | null
          phone?: string | null
          plan?: Database["public"]["Enums"]["plan"] | null
          state?: string | null
          street_address?: string | null
          updated_at?: string | null
          user_id?: string | null
          website?: string | null
          zip_code?: string | null
        }
        Update: {
          city?: string | null
          company_name?: string | null
          country?: string | null
          created_at?: string | null
          department?: string | null
          departments?: Json | null
          id?: string
          logo_url?: string | null
          permissions?: Json | null
          phone?: string | null
          plan?: Database["public"]["Enums"]["plan"] | null
          state?: string | null
          street_address?: string | null
          updated_at?: string | null
          user_id?: string | null
          website?: string | null
          zip_code?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string | null
          department: string | null
          deskpop_options: Json | null
          email: string | null
          first_name: string | null
          handle: string | null
          id: string
          last_name: string | null
          organization_id: string | null
          phone: string | null
          platform: Database["public"]["Enums"]["platform"] | null
          role: string | null
          superuser_theme: boolean | null
          team_id: string | null
          team_name: string | null
          timezone: string | null
          updated_at: string | null
          user_id: string | null
          user_level: Database["public"]["Enums"]["user_level"] | null
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string | null
          department?: string | null
          deskpop_options?: Json | null
          email?: string | null
          first_name?: string | null
          handle?: string | null
          id?: string
          last_name?: string | null
          organization_id?: string | null
          phone?: string | null
          platform?: Database["public"]["Enums"]["platform"] | null
          role?: string | null
          superuser_theme?: boolean | null
          team_id?: string | null
          team_name?: string | null
          timezone?: string | null
          updated_at?: string | null
          user_id?: string | null
          user_level?: Database["public"]["Enums"]["user_level"] | null
        }
        Update: {
          avatar_url?: string | null
          created_at?: string | null
          department?: string | null
          deskpop_options?: Json | null
          email?: string | null
          first_name?: string | null
          handle?: string | null
          id?: string
          last_name?: string | null
          organization_id?: string | null
          phone?: string | null
          platform?: Database["public"]["Enums"]["platform"] | null
          role?: string | null
          superuser_theme?: boolean | null
          team_id?: string | null
          team_name?: string | null
          timezone?: string | null
          updated_at?: string | null
          user_id?: string | null
          user_level?: Database["public"]["Enums"]["user_level"] | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      projects: {
        Row: {
          client: string | null
          collaborators: Json | null
          comments: Json | null
          created_at: string | null
          description: string | null
          due_date: string | null
          id: string
          organization_id: string | null
          owner: string | null
          quote: string | null
          status: Database["public"]["Enums"]["project_status"] | null
          subtasks: Json | null
          updated_at: string | null
        }
        Insert: {
          client?: string | null
          collaborators?: Json | null
          comments?: Json | null
          created_at?: string | null
          description?: string | null
          due_date?: string | null
          id?: string
          organization_id?: string | null
          owner?: string | null
          quote?: string | null
          status?: Database["public"]["Enums"]["project_status"] | null
          subtasks?: Json | null
          updated_at?: string | null
        }
        Update: {
          client?: string | null
          collaborators?: Json | null
          comments?: Json | null
          created_at?: string | null
          description?: string | null
          due_date?: string | null
          id?: string
          organization_id?: string | null
          owner?: string | null
          quote?: string | null
          status?: Database["public"]["Enums"]["project_status"] | null
          subtasks?: Json | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "projects_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "projects_owner_fkey"
            columns: ["owner"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      proposals: {
        Row: {
          accessories: Json | null
          created_at: string | null
          created_by: string | null
          currency: string | null
          description: string | null
          id: string
          inventory_item_id: string
          lead_id: number
          notes: string | null
          organization_id: string | null
          s3_key: string | null
          s3_url: string | null
          status: string
          terms_and_conditions: string | null
          title: string
          total_amount: number
          updated_at: string | null
          valid_until: string | null
        }
        Insert: {
          accessories?: Json | null
          created_at?: string | null
          created_by?: string | null
          currency?: string | null
          description?: string | null
          id?: string
          inventory_item_id: string
          lead_id: number
          notes?: string | null
          organization_id?: string | null
          s3_key?: string | null
          s3_url?: string | null
          status?: string
          terms_and_conditions?: string | null
          title: string
          total_amount?: number
          updated_at?: string | null
          valid_until?: string | null
        }
        Update: {
          accessories?: Json | null
          created_at?: string | null
          created_by?: string | null
          currency?: string | null
          description?: string | null
          id?: string
          inventory_item_id?: string
          lead_id?: number
          notes?: string | null
          organization_id?: string | null
          s3_key?: string | null
          s3_url?: string | null
          status?: string
          terms_and_conditions?: string | null
          title?: string
          total_amount?: number
          updated_at?: string | null
          valid_until?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "proposals_inventory_item_id_fkey"
            columns: ["inventory_item_id"]
            isOneToOne: false
            referencedRelation: "inventory"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proposals_lead_id_fkey"
            columns: ["lead_id"]
            isOneToOne: false
            referencedRelation: "leads"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proposals_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      bulk_update_order_status:
        | { Args: never; Returns: undefined }
        | { Args: { updates: Json }; Returns: undefined }
      get_completion_rate: { Args: never; Returns: number }
      get_distinct_folders: {
        Args: { user_id_param: string }
        Returns: string[]
      }
      get_orders_with_details: {
        Args: never
        Returns: {
          company_name: string
          created_at: string
          items: Json
          items_count: number
          order_id: string
          status: string
          total_quantity: number
        }[]
      }
      list_tables: {
        Args: never
        Returns: {
          table_name: string
          table_schema: string
          table_type: string
        }[]
      }
      update_order_status: {
        Args: { p_order_id: string; p_status: string }
        Returns: undefined
      }
      update_workout_folder: {
        Args: { p_folder_name: string; p_workout_id: number }
        Returns: {
          updated_count: number
        }[]
      }
      user_organization_id: { Args: never; Returns: string }
    }
    Enums: {
      duration_unit: "hours" | "minutes"
      make: "Club Car" | "Garia"
      model:
        | "Precedent"
        | "Tempo"
        | "Onward"
        | "Golf"
        | "Via-2"
        | "Via-4"
        | "Courtesy"
        | "Club Car"
        | "Garia"
      plan: "organization" | "personal" | "broke_bros" | "demo"
      platform: "champion" | "envesti"
      project_status:
        | "New"
        | "In Progress"
        | "Waiting"
        | "On Hold"
        | "Invoice Sent"
        | "Complete"
      status_type: "active" | "adjusted" | "discontinued"
      user_level:
        | "SuperAdmin"
        | "Parts"
        | "Sales"
        | "Technician"
        | "Admin"
        | "Organization"
        | "Personal"
        | "Club"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  graphql_public: {
    Enums: {},
  },
  public: {
    Enums: {
      duration_unit: ["hours", "minutes"],
      make: ["Club Car", "Garia"],
      model: [
        "Precedent",
        "Tempo",
        "Onward",
        "Golf",
        "Via-2",
        "Via-4",
        "Courtesy",
        "Club Car",
        "Garia",
      ],
      plan: ["organization", "personal", "broke_bros", "demo"],
      platform: ["champion", "envesti"],
      project_status: [
        "New",
        "In Progress",
        "Waiting",
        "On Hold",
        "Invoice Sent",
        "Complete",
      ],
      status_type: ["active", "adjusted", "discontinued"],
      user_level: [
        "SuperAdmin",
        "Parts",
        "Sales",
        "Technician",
        "Admin",
        "Organization",
        "Personal",
        "Club",
      ],
    },
  },
} as const
